class eCommercePage {

    get allCheckBoxes(){
        return $$(".icheck")
    } 

    get searchHeader(){
        return $('//h4[text() = " Search"]')
    }

    get searchBox(){
        return $("#search-query")
    }

    get submitButtton(){
        return $('[data-test="search-submit"]')
    }

    get cardHeaders(){
        return $$('.card-title')
    }

    get reassigned_cardHeaders(){
        return $$('.card-title')
    }

    async openBrowser(){
        await browser.url("https://practicesoftwaretesting.com/")
    }

    async verifyAllFiltersAreDisabled(){
                for (const eachCheckbox of await this.allCheckBoxes) {
                    await expect(eachCheckbox).not.toBeChecked();
                }
    }

    async inputNewItem(Item){
        this.searchItem = Item
        await this.searchHeader.scrollIntoView();
        await this.searchBox.setValue(Item);
    }

    async submit(){
        await this.submitButtton.click();
        await browser.pause(3000); 
    }

    async verifySearchFilterFunctionWorks(){
        const filteredProducts = []; 

            for (let i = 0; i < await this.cardHeaders.length; i++) {  
                const eachCardHeader = this.reassigned_cardHeaders[i]
                const text = await eachCardHeader.getText()
                await filteredProducts.push(text)
                console.log(await `These are the filtered products:\n ${filteredProducts}`)
            }
        
        
            for (let eachFilteredProduct of filteredProducts) {
                const searchItem = new RegExp(this.searchItem,"i")
                await expect(eachFilteredProduct).toMatch(searchItem)
            }

        await browser.pause(2000);

    }

}

export default new eCommercePage()