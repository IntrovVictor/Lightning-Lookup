/**
 * (c) Tony Scott. This code is provided as is and without warranty of any kind.
 * Adapted for use in a VF page, removed need for two components, removed events - Caspar Harmer
 *
 * This work by Tony Scott is licensed under a Creative Commons Attribution 3.0 Unported License.
 * http://creativecommons.org/licenses/by/3.0/deed.en_US
 */
({
    /**
     * Search an SObject for a match
     */
    search : function(cmp, event, helper) {
        helper.doSearch(cmp);
    },

    /**
     * Select an SObject from a list
     */
    select: function(cmp, event, helper) {

        helper.handleSelection(cmp, event);
    },

    /**
     * Clear the currently selected SObject
     */
    clear: function(cmp, event, helper) {

        helper.clearSelection(cmp);
    },


    /**
     * If the input is requred, check if there is a value on blur
     * and mark the input as error if no value
     */
     handleBlur: function (cmp, event, helper) {

         helper.handleBlur(cmp);
     },

    init : function(cmp, event, helper){
      try{
        //first load the current value of the lookup field
        helper.init(cmp);
        helper.loadFirstValue(cmp);

        }catch(ex){
          console.log(ex);
        }
      }
})
