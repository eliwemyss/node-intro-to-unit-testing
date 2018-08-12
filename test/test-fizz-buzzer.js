const fizzBuzzer = require('../fizzBuzzer')

const expect = require('chai').expect;

describe ('fizzBuzzer', function() {
	it('should return "fizz-buzz" for multiples of 15', function() {
		[15, 30, 45].forEach(function(input) {
			expect(fizzBuzzer(input)).to.equal('fizz-buzz')
		});
	});
	it('should return "buzz" for multiples of 5', function() {
		[5, 10, 25].forEach(function(input) {
			expect(fizzBuzzer(input)).to.equal('buzz')
		});
	});
	it('should return "fizz" for multiples of 3', function() {
		[3, 6, 9].forEach(function(input) {
			expect(fizzBuzzer(input)).to.equal('fizz')
		});
	});
	it('should return number if not a multiple of 3 or 5', function() {
		[1, 2, 4].forEach(function(input) {
			expect(fizzBuzzer(input)).to.equal(input)
		});
	});
	it('should throw error if input not a number', function() {
		const notEqual = [true, false, 'something', function() {}, [1]];
		notEqual.forEach(function(input){
			expect(function() {
				fizzBuzzer(input);
			}).to.throw(Error);
		});
	});
});