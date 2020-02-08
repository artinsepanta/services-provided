import React, { Component } from 'react';

class Home extends Component {
  state = {
      checked: true,
      heading: 'WELCOME'
  }

  toggleSwitch = () => {
    const newVal = !this.state.checked
    if (newVal) {
        return this.setState({
            heading: 'WELCOME',
            checked: newVal
        })
    }
    return this.setState({
        heading: 'WELCOME',
        checked: newVal
    })
  }

  render() {
    return (
     
        <div class="content_wrap" id="section-a">
     
        <h1 class="content-wrap">
          Welcome to our site
         </h1>
        <p>
        “The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.”
― Ralph Waldo Emerson
        </p>
        <button  class="button Read more animated  heartBeat" >
            <a href="https://austincodingacademy.com/ ">Read More</a> 
         </button>  
  
  <div class="flex-container" id="section-b" >
      <div id="box1">
        <h1>
        Child Labor
        </h1>
        <p>The International Day for the Fight against Child Labor is celebrated every year on June 7, with the aim of preventing child labor in any way.</p>
      </div> 

      <div className ="box2"> 
          <h1>
            Homeless Day
          </h1>
          <p>On the 10th of October 2019 people around the world will mark World Homeless Day in many varied ways and change the lives of homeless people in their local community. World Homeless Day is an annual event on the 10th of October.</p>
        </div>

        <div id="box3">
          <h1>
            World Food Day
          </h1>
          <p>World Food Day is an international day celebrated every year around the world on 16 October in honor of the date of the founding of the Food and Agriculture Organization of the United Nations in 1945.</p>
        </div>
        <div id="box4">
          <h1>
           Day of Education
          </h1>
          <p>Education is a human right, a public good and a public responsibility. The United Nations General Assembly proclaimed 24 January as International Day of Education, in celebration of the role of education for peace and development.</p>
        </div>
    </div>

    <div class="Bacon-Ipsum transition transform ">
      <br/>
        <div class="box">Dera Charity</div>
        {/* <div class="box">Dera Charity</div>
        <div class="box">Dera Charity</div> */}
      </div>

    <div id="section-c" class="grid-card">
        <ul>
            <li>
              <div class="card-content">
                <img src="../images/sky1.jpg" width="350px" height="150px" alt="Homelessness Definition"/>
                        <h2 class="card-title"> Homelessness Definition </h2>
                        <p>Homelessness describes the situation of an individual or family without stable, permanent,
appropriate housing, or the immediate prospect, means and ability of acquiring it. It is the result
of systemic or societal barriers, a lack of affordable and appropriate housing, the individual /
household’s financial, mental, cognitive, behavioural or physical challenges, and/or racism and
discrimination. Most people do not choose to be homeless, and the experience is generally negative,
unpleasant, stressful and distressing.” (CHRN, 2012: 1)</p>
     </div>
      </li>
            <li>
             <div class="card-content">
             <img src="../images/sky2.jpg" width="350px" height="150px" alt="Homelessness as a problem"/>
                     <h2 class="card-title">Homelessness as a problem </h2>
                     <p>The problem of homelessness and housing exclusion refers to the failure of society to
ensure that adequate systems, funding and support are in place so that all people, even
in crisis situations, have access to housing. The goal of ending homelessness is to ensure
housing stability, which means people have a fixed address and housing that is appropriate
(affordable, safe, adequately maintained, accessible and suitable in size), and includes
required services as needed (supportive), in addition to income and supports. (CHRN, 2012: 1)</p>
              </div>
         </li>
         <li>
             <div class="card-content">
             <img src="../images/sky3.jpg" width="350px" height="150px" alt="Stoping homelessness"/>
                     <h2 class="card-title"> Stoping homelessness</h2>
                     <p>Prevention – Stopping people from becoming homeless in the first place. Emergency Response – Providing emergency supports like shelter, food and day programs, while someone is homeless. Housing, Accommodation, and Supports – The provision of housing and ongoing supports as a means of moving people out of homelessness.</p>
             </div>
         </li>
        </ul>
    </div>
  
   
   <footer id="main-footer" class="flex">
      <div >
        <strong>
            Dera Charity
        </strong>
      </div>
      <div>
        <small>
          E-mail:baconipsum@gmail.com
        </small>
      </div>
      <div>
        <small>
       #Phone:111-222-3333
        </small>
      </div>
</footer>
      </div>
      
    )   
  
    } 
}

export default Home;