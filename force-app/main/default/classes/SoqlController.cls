/**
 * @description       : 
 * @author            : Vinay Kovvuri
 * @group             : 
 * @last modified on  : 01-25-2024
 * @last modified by  : Vinay Kovvuri
**/
public with sharing class SoqlController {
    @AuraEnabled(cacheable=true)
    public static Map<String,String> fetchAllObjectMap(){
        Map<String,String> mapOfAllObjects = new Map<String,String>();
        for (Schema.sObjectType objType : Schema.getGlobalDescribe().Values())
        {
            String name = objType.getDescribe().getLocalName();
            String label = objType.getDescribe().getLabel();
            mapOfAllObjects.put(name,label);
        }
        return mapOfAllObjects;
    }
}