import { expect } from "@wdio/globals";
import eCommercePage from "../pageobjects/eCommercePage"

describe("Search Filter Function", () => {

    it("Filter Test", async () => {

        await eCommercePage.openBrowser()

        await eCommercePage.verifyAllFiltersAreDisabled()

        await eCommercePage.inputNewItem("hammer")

        await eCommercePage.submit()

        await eCommercePage.verifySearchFilterFunctionWorks()
         
    });
});