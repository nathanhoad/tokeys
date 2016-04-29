var Should = require('should'),
    Tokeys = require('..');


describe('Tokeys', function () {
    it('should create an object with keys matching their properties', function () {
        var object = Tokeys(['FIRST', 'SECOND']);
        
        object.FIRST.should.equal('FIRST');
        object.SECOND.should.equal('SECOND');
    });
    
    it('should use the prefix if provided', function () {
        var object = Tokeys(['FIRST', 'SECOND'], 'PREFIX_');
        
        object.FIRST.should.equal('PREFIX_FIRST');
        object.SECOND.should.equal('PREFIX_SECOND');
    });
});