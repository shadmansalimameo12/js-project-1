
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










function isBestFriend(f1, f2) {
    if(typeof f1 === 'object' && typeof f2 === 'object' ){
        if( 'name' in f1 && 'roll' in f1 && 'bestFriend' in f1 &&
            'name' in f2 && 'roll' in f2 && 'bestFriend' in f2
         )
         {
            if(f1.roll === f2.bestFriend && f2.roll === f1.bestFriend){
                return true;
            }
            else{
                return false
            }
            
         }

         else{
            return 'Invalid'

         }

    }
    else{
        return 'Invalid';
    }


}













function  calculateWatchTime( times ) {

    for(i = 0; i< times.length; i++){
        if(typeof times[i] !== 'number'){
            return 'Invalid'
        }
        
    }


    let totalTime = 0;
    
    for(const time of times){
        totalTime = totalTime + time;
        
    }
    const hours = Math.floor( totalTime / 3600 );
    const minutes = Math.floor((totalTime % 3600) / 60);
    const seconds = totalTime % 60
    const wholeTotal = {hour : hours,minute : minutes,second : seconds}
    return wholeTotal;
    
    
}




