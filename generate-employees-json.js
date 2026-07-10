/**
 * generate-employees-json.js
 *
 * Fetches the AQUALocator employee directory from Firebase Firestore
 * (same config as index.html) and writes employees.json to this directory.
 *
 * Run from the aqualocator.github.io repo root:
 *   node generate-employees-json.js
 *
 * Then commit + push:
 *   git add employees.json && git commit -m "Update employees.json" && git push
 *
 * The file will be publicly accessible at:
 *   https://aqualocator.github.io/employees.json
 */

import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const FIREBASE_CONFIG = {
  apiKey:            'AIzaSyABeCFheLuS08mxfWjCSS2ugXFbLDgnpIE',
  authDomain:        'aqualocator-23714.firebaseapp.com',
  projectId:         'aqualocator-23714',
  storageBucket:     'aqualocator-23714.appspot.com',
  messagingSenderId: '654848563347',
  appId:             '1:654848563347:web:4702a6f55ccbf7d5edd566',
};

const APP_ID       = 'default-app-id';
const COLLECTION   = `artifacts/${APP_ID}/public/data/employees`;
const OUTPUT_FILE  = join(__dirname, 'employees.json');

// Fields to keep in the exported JSON (omit raw imageUrl base64 blobs to keep file small)
const KEEP_FIELDS = ['name', 'First', 'Last', 'title', 'initials', 'ext', 'dept', 'email', 'responsibilities'];

async function main() {
  console.log('Initializing Firebase...');
  const app  = initializeApp(FIREBASE_CONFIG);
  const auth = getAuth(app);
  const db   = getFirestore(app);

  console.log('Signing in anonymously...');
  await signInAnonymously(auth);

  console.log(`Fetching employees from Firestore (${COLLECTION})...`);
  const snapshot = await getDocs(collection(db, COLLECTION));

  const employees = snapshot.docs
    .map(doc => {
      const d = doc.data();
      if (d.responsibilities === 'XXX') return null; // skip placeholder rows
      if (!d.name || d.name.trim().toLowerCase() === 'n/a') return null;

      const out = {};
      for (const f of KEEP_FIELDS) {
        if (d[f] !== undefined && d[f] !== null && d[f] !== '') {
          out[f] = d[f];
        }
      }
      return out;
    })
    .filter(Boolean)
    .sort((a, b) => {
      const la = (a.Last || a.name.split(' ').pop()).toLowerCase();
      const lb = (b.Last || b.name.split(' ').pop()).toLowerCase();
      return la.localeCompare(lb);
    });

  const json = JSON.stringify(employees, null, 2);
  writeFileSync(OUTPUT_FILE, json, 'utf8');

  console.log(`\n✓ Wrote ${employees.length} employees to ${OUTPUT_FILE}`);
  console.log('  Next: git add employees.json && git commit -m "Update employees.json" && git push');
  process.exit(0);
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
