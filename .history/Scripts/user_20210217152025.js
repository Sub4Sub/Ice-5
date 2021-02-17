"use strict";
// User Class

((core)=>{
  class User 
  {
    // getters and setters
    get DisplayName() 
    {
      return this.m_displayName;
    }
  
    set DisplayName(value) 
    {
      this.m_displayName = value;
    }
  
    get EmailAddress() 
    {
      return this.m_emailAddress;
    }
  
    set EmailAddress(value) 
    {
      this.m_emailAddress = value;
    }

    get UserName() 
    {
      return this.m_userName;
    }
  
    set UserName(value) 
    {
      this.m_userName = value;
    }

    get Password() 
    {
      return this.m_password;
    }
  
    set Password(value) 
    {
      this.m_password = value;
    }
  
    // constructor

    /**
     * Creates an instance of User.
     * @param {string} [displayName=""]
     * @param {string} [emailAddress=""]
     * @param {string} [username=""]
     * @param {string} [password=""]
     */
    constructor(displayName = "", emailAddress = "", username = "", password ="") 
    {
      this.DisplayName = displayName;
      this.EmailAddress = emailAddress;
      this.UserName = username;
      this.Password = password;
    }

    // methods

    /**
     * This method overrides the built-in toString method for the Contact class
     *
     * @returns {string}
     */
    toString() 
    {
      return `Display Name     : ${this.FullName} \nEmail Address : ${this.EmailAddress} \nUserName : ${this.UserName}`;
    }

    /**
     * This method converts the Contact into a comma-separated value string
     *
     * @returns {string}
     */
    serialize()
    {
      if(this.DisplayName !== "" && this.EmailAddress !== "" && this.EmailAddress !== "")
      {
        return `${this.FullName},${this.ContactNumber},${this.EmailAddress}`;
      }
      else 
      {
        console.error("One or more properties of the Contact is empty");
        return null;
      }
    }

    /**
     * This method takes a comma-separated data string and assigns the values to the Contact class properties
     *
     * @param {string} data
     * @return {void}
     */
    deserialize(data)
    {
      let propertyArray = data.split(",");
      this.FullName = propertyArray[0];
      this.ContactNumber = propertyArray[1];
      this.EmailAddress = propertyArray[2];
    }

    /**
     * This method returns a JSON object made up of the properties of the Contact class
     *
     * @returns {Object}
     */
    toJSON()
    {
      return {
        "DisplayName": this.DisplayName,
        "EmailAddress": this.EmailAddress,
        "UserName": this.UserName
      }
    }

    fromJSON(JSONData)
    {
      this.DisplayName = JSONData.DisplayName;
      this.EmailAddress = JSONData.EmailAddress;
      this.UserName = JSONData.UserName;
    }

  }

  core.User = User;

})(core || (core={}));