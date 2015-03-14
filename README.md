# Tokeys

Take an array of strings and turn it into an object with matching keys/values. This is used mostly for [Flux](https://facebook.github.io/flux/) constants.

    var Constants = Tokeys([
        'CREATE_ITEM',
        'UPDATE_ITEM',
        'DELETE_ITEM'
    ]);

Creates: 

    { 
        CREATE_ITEM: 'CREATE_ITEM', 
        UPDATE_ITEM: 'UPDATE_ITEM', 
        DELETE_ITEM: 'DELETE_ITEM' 
    }

Which can be used like `Constants.CREATE_ITEM` when passing in constants to a Flux action, for example.