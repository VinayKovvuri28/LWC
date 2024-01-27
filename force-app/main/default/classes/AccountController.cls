/**
 * @description       : 
 * @author            : Vinay Kovvuri
 * @group             : 
 * @last modified on  : 01-25-2024
 * @last modified by  : Vinay Kovvuri
**/
public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        try {
            return [SELECT Id, Name, Type, Industry FROM Account LIMIT 5];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> filterAccountByType(String type){
        try {
            return [SELECT Id, Name, Type, Industry FROM Account WHERE Type =: type LIMIT 10]; 
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> filterAccounts(String name){
        String accountName = '%'+name+'%';
        try {
            return [SELECT Id, Name, Type, Industry FROM Account WHERE Name LIKE : accountName LIMIT 10]; 
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> allAccountsWithContact(){
        return [SELECT Id, Name, Phone, Website, 
        (SELECT id, Name, Phone, Email FROM Contacts) FROM Account LIMIT 5];
    }
}