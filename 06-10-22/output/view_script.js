
        const k= window.location.search;
        let c= new URLSearchParams(k)
        let url=c.get('name')
        alert("Resume of : "+url)
        let resume=JSON.parse( localStorage.getItem('myresume'))


      for(let i=0;i<resume.length;i++){
        if (url==resume[i].name){
        document.getElementById('myname').innerHTML=resume[i].name  
        document.getElementById('email').innerHTML=resume[i].email
        document.getElementById('phone').innerHTML=resume[i].phone
        document.getElementById('role').innerHTML=resume[i].role
        document.getElementById('objective').innerHTML=resume[i].objective

        // education
          
        document.getElementById('course0').innerHTML=resume[i].education[0].course
        document.getElementById('year0').innerHTML=resume[i].education[0].year
        document.getElementById('institute0').innerHTML=resume[i].education[0].institute
        document.getElementById('percentage0').innerHTML=resume[i].education[0].percentage
        document.getElementById('course1').innerHTML=resume[i].education[1].course
        document.getElementById('year1').innerHTML=resume[i].education[1].year
        document.getElementById('institute1').innerHTML=resume[i].education[1].institute
        document.getElementById('percentage1').innerHTML=resume[i].education[1].percentage
        document.getElementById('course2').innerHTML=resume[i].education[2].course
        document.getElementById('year2').innerHTML=resume[i].education[2].year
        document.getElementById('institute2').innerHTML=resume[i].education[2].institute
        document.getElementById('percentage2').innerHTML=resume[i].education[2].percentage

        // certification

        document.getElementById('course4').innerHTML=resume[i].certification[0].course
        document.getElementById('institute4').innerHTML=resume[i].certification[0].institute
        document.getElementById('duration4').innerHTML=resume[i].certification[0].duration
        document.getElementById('course5').innerHTML=resume[i].certification[1].course
        document.getElementById('institute5').innerHTML=resume[i].certification[1].institute
        document.getElementById('duration5').innerHTML=resume[i].certification[1].duration

        // project

        document.getElementById('title1').innerHTML=resume[i].project[0].title
        document.getElementById('abstract1').innerHTML=resume[i].project[0].abstract
        document.getElementById('title2').innerHTML=resume[i].project[1].title
        document.getElementById('abstract2').innerHTML=resume[i].project[1].abstract

// experience

        document.getElementById('company1').innerHTML=resume[i].experience[0].company 
        document.getElementById('dur1').innerHTML=resume[i].experience[0].duration 
        document.getElementById('role1').innerHTML=resume[i].experience[0].role
        document.getElementById('company2').innerHTML=resume[i].experience[1].company 
        document.getElementById('dur2').innerHTML=resume[i].experience[1].duration 
        document.getElementById('role2').innerHTML=resume[i].experience[1].role

// area of interest

        document.getElementById('interest1').innerHTML=resume[i].area_of_interest[0]
        document.getElementById('interest2').innerHTML=resume[i].area_of_interest[1]

// hobbies

        document.getElementById('hobbies1').innerHTML=resume[i].hobbies[0]
        document.getElementById('hobbies2').innerHTML=resume[i].hobbies[1]

// personal details

        document.getElementById('father').innerHTML=resume[i].personal_details.father_name
        document.getElementById('mother').innerHTML=resume[i].personal_details.mother_name
        document.getElementById('sibling').innerHTML=resume[i].personal_details.sibling_name
        document.getElementById('age').innerHTML=resume[i].personal_details.age;
        document.getElementById('blood').innerHTML=resume[i].personal_details.blood_group;
        document.getElementById('lang0').innerHTML=resume[i].languages[0].language
        document.getElementById('lang1').innerHTML=resume[i].languages[1].language
        document.getElementById('lang2').innerHTML=resume[i].languages[2].language
        document.getElementById('gen').innerHTML=resume[i].personal_details.gender
        document.getElementById('marital').innerHTML=resume[i].personal_details.marital_status
        document.getElementById('address').innerHTML=resume[i].personal_details.address

        }}
        