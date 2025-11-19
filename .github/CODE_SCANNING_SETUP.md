# Enabling Code Scanning for SARIF Uploads

If you want to enable Code Scanning to view ESLint results in the GitHub Security tab, follow these steps:

## Enable Code Scanning

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Code security and analysis**
3. Under **Code scanning**, click **Set up** or **Enable**
4. You can either:
   - Use **GitHub Advanced Security** (if available for your account)
   - Or enable it through the **Security** tab → **Code scanning alerts**

## Alternative: View Results as Artifacts

If Code Scanning is not enabled, the workflow will:
- Still run ESLint successfully
- Upload the SARIF report as a workflow artifact
- You can download and view the report from the Actions tab

## Current Workflow Behavior

The workflow is configured to:
- ✅ Run ESLint analysis
- ✅ Generate SARIF report
- ✅ Upload to Code Scanning (if enabled) - **non-blocking**
- ✅ Upload as artifact (always available)

The workflow will **not fail** if Code Scanning is disabled.

