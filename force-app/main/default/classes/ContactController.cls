/**
 * @description       : 
 * @author            : Vinay Kovvuri
 * @group             : 
 * @last modified on  : 01-22-2024
 * @last modified by  : Vinay Kovvuri
**/
public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(){
        return [SELECT Id, Name, Title, Email FROM Contact];
    }
}