## DemoExt ##

- In VSCode, go to terminal and execute `npm install`
- Do not update the npm packages to latest version. 
    > The code currently works with Typescript 2.4.3 only due to incompatibility with VSS Web Extension SDK.
- Install `Typescript v2.3.4` and `tfx-cli` packages globally to avoid conflicts using below command
    
    ```cmd
        npm install typescript@2.3.4 -g && npm install tfx-cli -g
    ```
- Click on any typescript (*.ts) file and ensure VS Code is using 2.4.3 version of typescript. VSCode displays the typescript version on lower right side of the status bar when you have a typescript file open in the editor.
- Once everything is done, press `Ctrl + Shift + B` to compile. You should not get any errors.