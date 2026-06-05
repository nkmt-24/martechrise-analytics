#!/usr/bin/env node

/**
 * GA4 Integration Verification Script
 * 
 * This script verifies that all GA4 integration files are properly created
 * and contain the expected content.
 * 
 * Usage: node verify-ga4-setup.js
 */

const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();

// Color codes for terminal output
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkFileExists(filePath, name) {
    const fullPath = path.join(projectRoot, filePath);
    const exists = fs.existsSync(fullPath);

    if (exists) {
        log(`✓ ${name}`, 'green');
        return true;
    } else {
        log(`✗ ${name} - FILE NOT FOUND`, 'red');
        return false;
    }
}

function checkFileContent(filePath, searchText, name) {
    const fullPath = path.join(projectRoot, filePath);

    if (!fs.existsSync(fullPath)) {
        log(`✗ ${name} - FILE NOT FOUND`, 'red');
        return false;
    }

    const content = fs.readFileSync(fullPath, 'utf-8');

    if (content.includes(searchText)) {
        log(`✓ ${name}`, 'green');
        return true;
    } else {
        log(`✗ ${name} - CONTENT NOT FOUND`, 'red');
        return false;
    }
}

function main() {
    log('\n═══════════════════════════════════════════════════════════════', 'cyan');
    log('           GA4 INTEGRATION VERIFICATION', 'cyan');
    log('═══════════════════════════════════════════════════════════════\n', 'cyan');

    let allChecks = true;

    // 1. Check new files created
    log('📁 CHECKING NEW FILES:', 'cyan');
    allChecks &= checkFileExists('src/lib/analytics/constants.ts', 'Analytics constants');
    allChecks &= checkFileExists('src/lib/analytics/ga4.ts', 'GA4 tracking functions');
    allChecks &= checkFileExists('src/lib/analytics/scroll-tracking.ts', 'Scroll tracking');
    allChecks &= checkFileExists('src/lib/analytics/time-tracking.ts', 'Time tracking');
    allChecks &= checkFileExists('src/components/analytics/GoogleAnalytics.tsx', 'GA4 component');
    allChecks &= checkFileExists('src/lib/analytics/useAnalytics.ts', 'useAnalytics hook');
    allChecks &= checkFileExists('src/lib/analytics/index.ts', 'Analytics barrel export');

    // 2. Check documentation files
    log('\n📚 CHECKING DOCUMENTATION:', 'cyan');
    allChecks &= checkFileExists('GA4_IMPLEMENTATION_GUIDE.md', 'Implementation guide');
    allChecks &= checkFileExists('GA4_SUMMARY.md', 'GA4 summary');
    allChecks &= checkFileExists('GA4_QUICK_START.md', 'Quick start guide');
    allChecks &= checkFileExists('GA4_COMPONENT_TRACKING.md', 'Component tracking guide');

    // 3. Check modified files
    log('\n🔧 CHECKING MODIFICATIONS:', 'cyan');
    allChecks &= checkFileContent(
        'src/app/layout.tsx',
        'import GoogleAnalytics from',
        'Layout - GoogleAnalytics import'
    );
    allChecks &= checkFileContent(
        'src/app/layout.tsx',
        '<GoogleAnalytics />',
        'Layout - GoogleAnalytics component'
    );
    allChecks &= checkFileContent(
        'src/config/env.ts',
        'NEXT_PUBLIC_GA_MEASUREMENT_ID',
        'Env schema - GA4 Measurement ID'
    );
    allChecks &= checkFileContent(
        'src/components/layout/FloatingContact.tsx',
        "'use client'",
        'FloatingContact - Client directive'
    );
    allChecks &= checkFileContent(
        'src/components/layout/FloatingContact.tsx',
        'useAnalytics',
        'FloatingContact - useAnalytics hook'
    );
    allChecks &= checkFileContent(
        'src/components/layout/FloatingContact.tsx',
        'trackWhatsAppClick',
        'FloatingContact - WhatsApp tracking'
    );
    allChecks &= checkFileContent(
        'src/components/layout/FloatingContact.tsx',
        'trackPhoneCall',
        'FloatingContact - Phone tracking'
    );

    // 4. Check environment configuration
    log('\n⚙️  CHECKING ENVIRONMENT SETUP:', 'cyan');
    allChecks &= checkFileContent(
        '.env.example',
        'NEXT_PUBLIC_GA_MEASUREMENT_ID',
        '.env.example - GA4 Measurement ID documented'
    );

    // 5. Check key content in analytics files
    log('\n📊 CHECKING ANALYTICS MODULE CONTENT:', 'cyan');

    // Check constants
    allChecks &= checkFileContent(
        'src/lib/analytics/constants.ts',
        'GA4_KEY_EVENTS',
        'Constants - Key events'
    );
    allChecks &= checkFileContent(
        'src/lib/analytics/constants.ts',
        'GA4_ENGAGEMENT_EVENTS',
        'Constants - Engagement events'
    );

    // Check ga4.ts
    allChecks &= checkFileContent(
        'src/lib/analytics/ga4.ts',
        'export const trackEvent',
        'GA4 - trackEvent function'
    );
    allChecks &= checkFileContent(
        'src/lib/analytics/ga4.ts',
        'export const trackPhoneCall',
        'GA4 - trackPhoneCall function'
    );
    allChecks &= checkFileContent(
        'src/lib/analytics/ga4.ts',
        'export const trackScrollDepth',
        'GA4 - trackScrollDepth function'
    );

    // Check scroll tracking
    allChecks &= checkFileContent(
        'src/lib/analytics/scroll-tracking.ts',
        'initializeScrollTracking',
        'Scroll tracking - initialization'
    );

    // Check time tracking
    allChecks &= checkFileContent(
        'src/lib/analytics/time-tracking.ts',
        'initializeTimeTracking',
        'Time tracking - initialization'
    );

    // Check hook
    allChecks &= checkFileContent(
        'src/lib/analytics/useAnalytics.ts',
        'export const useAnalytics',
        'useAnalytics - hook export'
    );

    // Check barrel export
    allChecks &= checkFileContent(
        'src/lib/analytics/index.ts',
        'export',
        'Analytics index - exports'
    );

    // Final result
    log('\n═══════════════════════════════════════════════════════════════\n', 'cyan');

    if (allChecks) {
        log('✓ ALL CHECKS PASSED - GA4 INTEGRATION IS COMPLETE!', 'green');
        log('\n📋 NEXT STEPS:', 'cyan');
        log('   1. Add NEXT_PUBLIC_GA_MEASUREMENT_ID=G-2BFQPR4LCB to .env.local');
        log('   2. Run: npm run build');
        log('   3. Run: npm run dev');
        log('   4. Open GA4 > Real-Time and verify events are appearing');
        log('   5. See GA4_QUICK_START.md for detailed instructions\n');
    } else {
        log('✗ SOME CHECKS FAILED - PLEASE REVIEW ABOVE', 'red');
        log('\n   Please ensure all files were created correctly.');
        log('   See GA4_SUMMARY.md for file locations and contents.\n');
        process.exit(1);
    }
}

main();
