/**
 * The function returns the grade (1-5) of the student,
 * based on the score and the following rules:
 *  - 90 -    : 5
 *  - 80 - 89 : 4
 *  - 70 - 79 : 3
 *  - 60 - 69 : 2
 *  -    - 59 : 1
 *
 * @param {number} score (0 <= score <= 100)
 * @returns {number} grade or 0 if any arguments are not proper
 */
function classification(score) {
    let gradeOfStudent;
    /*
     * Your task is to calculate the grade of the student
     * based on his/her score which can be found in the
     * score variable and those rules can be found in the
     * documentation of the function.
     * Store the grade in the gradeOfStudent variable.
     * Also take into consideration the documentation of the function!
     */
    // PLACE YOUR CODE BETWEEN THIS...
    if(score < 0)
        return gradeOfStudent = 0;
    else if(score <= 100 && score >= 90)
        return gradeOfStudent = 5;
    else if(score <= 89 && score >= 80)
        return gradeOfStudent = 4;
    else if(score <= 79 && score >= 70)
        return gradeOfStudent = 3;
    else if(score <= 69 && score >= 60)
        return gradeOfStudent = 2;
    else if(score <= 59 && score >= 1)
        return gradeOfStudent = 1;
    else if(score == 0)
        return gradeOfStudent = 1;
    else if(score > 100)
        return gradeOfStudent = 0;

    }
    // ...AND THIS COMMENT LINE!

module.exports = classification;