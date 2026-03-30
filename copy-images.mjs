import fs from 'fs';
import path from 'path';

console.log("=== PRAYOGAM 2K26 IMAGE AUTO-COPYSCRIPT ===");

const brainDir = "C:\\Users\\Aditya Kapoor\\.gemini\\antigravity\\brain\\8871e994-8927-43b8-892f-ece2505e0298";
const publicTeamDir = "e:\\Antigravity Projects\\prayogam-2k26\\client\\public\\team";

const imageMappings = {
  "media__1774880022758.jpg": "ananya-jain.jpg",
  "media__1774880033813.jpg": "diya-jangid.jpg",
  "media__1774880054862.jpg": "nakshtra-saini.jpg"
};

try {
  let count = 0;
  for (const [srcName, destName] of Object.entries(imageMappings)) {
    const srcPath = path.join(brainDir, srcName);
    const destPath = path.join(publicTeamDir, destName);
    
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`[+] SUCCESS: Copied ${destName} into public/team`);
      count++;
    } else {
      console.log(`[!] ERROR: Source image ${srcName} not found in cache.`);
    }
  }
  
  if (count === 3) {
    console.log("\nAll images perfectly copied! You can now refresh your browser on the Team page to see the new grid.");
  }
} catch (error) {
  console.error("Failed to copy images:", error.message);
}
