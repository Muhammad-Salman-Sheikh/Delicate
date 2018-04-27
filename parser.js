/**
	* The parser constructor
	* @param {object} functions
	* @param {tokens} tokens
	
**/
const Parser = function(functions , tokens) {
	this.functions = functions;
	this.tokens = tokens;
	this.parse = () => this.tokens.length == 0 ?
			(() => { // If no operator is present
				type : 'noop'
			})() : 
		this.tokens[0] == '->' ?
			(() => {
				
			})() : 1; //WIP
	
};
