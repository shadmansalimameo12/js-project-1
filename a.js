
function cashOut( money ) {
    if(typeof(money) === 'number' && money >= 0 ){

        const cashoutAmount = money * 1.75/100;
        return cashoutAmount;



    }
    else{
        return 'Invalid';
    }


}








function  validEmail( email ) {
    const specialCharrectors = ['.', '-','_','+','@'];

    if( typeof email !== 'string' )    {

        return 'Invalid';
    }

    else if ( email.endsWith('.com') && email.includes(' ') === false && typeof email === 'string' && specialCharrectors.includes(email[0]) === false ){
       if(email.split('@').length !== 2){
        return false;

       }
       else{
        return true;
       }

    }



    else{
        return false;
    }

}








function electionResult(votes) {
    let mangoVotes = 0;
    let bananaVotes = 0;
    if (Array.isArray(votes) === true) {
        for (let i = 0; i < votes.length; i++) {
            if (typeof votes[i] === 'string') {
                if (votes[i] === 'mango') {
                    mangoVotes++
                }
                else if (votes[i] === 'banana') {
                    bananaVotes++
                }

            }
            else {
                return 'Invalid'
            }

        }
        if (mangoVotes > bananaVotes) {
            return 'Mango';
        }
        else if (bananaVotes > mangoVotes) {
            return 'Banana'
        }
        else if (bananaVotes === mangoVotes) {
            return 'Draw'
        }

    }
    else {
        return 'Invalid';

    }

}




