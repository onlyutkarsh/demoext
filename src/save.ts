/// <reference types="vss-web-extension-sdk" />
import BuildRestClient = require("TFS/Build/RestClient");
import BuildContracts = require("TFS/Build/Contracts");
import CommonContracts = require("TFS/DistributedTask/Contracts");
import TaskAgentRestClient = require("TFS/DistributedTask/TaskAgentRestClient");
import { BaseDefinition, DefinitionMetaData, CustomTask, CustomEndpoint } from "./entity";

export class DemoCl {
    "use strict";

    public getMenuItems(context) {
        console.log("Getting menu from 'Export' handler...");
        let menuItems: IContributedMenuItem[] = [];
        if (!context.hasOwnProperty("type") && context.type === 1) {
            // when definition type is XAML do not show the menu items.
            console.log("The definition clicked is TFS Build...NOT showing 'Export' menu item.");
            return menuItems;
        } else {
            console.log("The definition clicked is TFS Build...showing 'Export' menu item.");
            // build menu
            let buildMenu: IContributedMenuItem = {
                text: "DemoCl",
                title: "DemoCl",
                icon: "img/save-16x16.png",
                action: (x) => {
                    console.log(x);
                }
            };
            menuItems.push(buildMenu);
        }
        return menuItems;
    }
    async execute(actionContext) {
        let extInfo = VSS.getExtensionContext();
        let webContext = VSS.getWebContext();
        let that = this;

        console.log("ExtensionContext", extInfo);
        console.log("WebContext-web", webContext);
    }
}

VSS.register("menuExt", context => {
    let action = new DemoCl();
    return action;
});