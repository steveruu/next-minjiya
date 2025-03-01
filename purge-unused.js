// This script helps identify and remove unused CSS and JavaScript
// Run with: node purge-unused.js

const fs = require("fs");
const path = require("path");
const { PurgeCSS } = require("purgecss");

async function purgeUnusedCSS() {
    console.log("Starting PurgeCSS process...");

    const result = await new PurgeCSS().purge({
        content: [
            "./app/**/*.{js,ts,jsx,tsx}",
            "./components/**/*.{js,ts,jsx,tsx}",
        ],
        css: ["./app/globals.css"],
        safelist: {
            standard: [
                /^animate-/,
                /^group-/,
                /^hover:/,
                /^focus:/,
                /^active:/,
                /^sm:/,
                /^md:/,
                /^lg:/,
                /^xl:/,
                /^2xl:/,
            ],
            deep: [/tailwind/, /next-/],
        },
    });

    console.log("PurgeCSS completed. Results:");
    console.log(
        `Original CSS size: ${fs.statSync("./app/globals.css").size / 1024} KB`
    );

    // Write purged CSS to file
    if (result && result.length > 0) {
        fs.writeFileSync("./app/globals.purged.css", result[0].css);
        console.log(
            `Purged CSS size: ${
                fs.statSync("./app/globals.purged.css").size / 1024
            } KB`
        );
        console.log("Purged CSS written to ./app/globals.purged.css");
        console.log(
            "Review the file and if it looks good, replace your original CSS with this file."
        );
    }
}

function checkUnusedDependencies() {
    console.log("\nChecking for potentially unused dependencies...");

    // Read package.json
    const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
    const dependencies = {
        ...packageJson.dependencies,
        ...packageJson.devDependencies,
    };

    console.log("To check for unused dependencies, run:");
    console.log("npx depcheck");
    console.log("\nTo help identify large dependencies:");
    console.log("npx cost-of-modules --no-install");
}

async function main() {
    try {
        // Check if purgecss is installed
        try {
            require.resolve("purgecss");
        } catch (e) {
            console.log("PurgeCSS not found. Installing...");
            console.log("Please run: npm install -D purgecss");
            return;
        }

        await purgeUnusedCSS();
        checkUnusedDependencies();

        console.log("\nDone! Remember to:");
        console.log("1. Review purged CSS before using it");
        console.log("2. For JavaScript optimization, consider using:");
        console.log(
            '   - Import only what you need from libraries (e.g., import { useState } from "react")'
        );
        console.log("   - Use dynamic imports for code-splitting");
        console.log("   - Remove any unused package dependencies");
    } catch (error) {
        console.error("Error during optimization:", error);
    }
}

main();
