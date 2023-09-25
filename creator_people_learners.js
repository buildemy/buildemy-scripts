/** ***************************************************************************************************************** */
/** REQUEST */
/** ***************************************************************************************************************** */

var current_url = window.myURL;

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();
var data;


makeRequest('/creator_people_learners_webflow', function(receivedData) {
    data = receivedData;
    populate_learners(data.learners_info)
});





/** ***************************************************************************************************************** */
/** FUNCTION */
/** ***************************************************************************************************************** */


function populate_learners() {


    // TEMPLATE
    var template = `
        <div id="w-node-_7efa8add-59e8-92e5-b053-eb34f5ebe4ea-4ef9fdb0" class="student-info">
          <img src="https://uploads-ssl.webflow.com/64f9c1c078b052489c3a64c7/650be7e6ebc263099fb28af0_avatar-2.png" loading="lazy" width="36" id="w-node-_7efa8add-59e8-92e5-b053-eb34f5ebe4eb-4ef9fdb0" alt="">
          <div id="w-node-_7efa8add-59e8-92e5-b053-eb34f5ebe4ec-4ef9fdb0" class="learner_info">
            <div class="para_text_small w-node-_7efa8add-59e8-92e5-b053-eb34f5ebe4ed-4ef9fdb0"> {{ learners_name }} </div>
            <div class="para_text_xsmall white_60"> {{ learner_enrolled }} </div>
          </div>
        </div>
        <div class="para_text_xsmall white_60 w-node-_7efa8add-59e8-92e5-b053-eb34f5ebe4f1-4ef9fdb0"> {{ learners_mail }} </div>
        <div class="para_text_xsmall white_60 w-node-_7efa8add-59e8-92e5-b053-eb34f5ebe4f3-4ef9fdb0"> {{ learners_courses }} </div>
        <a id="w-node-_7efa8add-59e8-92e5-b053-eb34f5ebe4f5-4ef9fdb0" href="#" class="green_btn_wicon btn_hover w-inline-block">
          <div id="w-node-_7efa8add-59e8-92e5-b053-eb34f5ebe4f6-4ef9fdb0" class="para_text_xsmall green_text">View Progress</div>
          <img src="https://uploads-ssl.webflow.com/64f9c1c078b052489c3a64c7/650be7e6ebc263099fb28af2_link%402x.png" loading="lazy" width="10" alt="" class="image-144">
        </a>
    `;



    // RENDER
    for (const [index, entryData] of data["learners_info"].entries()) {
        // Create Div
        let containerDiv;
        containerDiv = document.createElement('div');
        containerDiv.setAttribute('id', ("learners_div" + index));
        containerDiv.setAttribute('class', 'learners-list-item');
        containerDiv.setAttribute('item-index', index);
        document.getElementById("learners_list_flex").appendChild(containerDiv);


        // Get Info
        const info = {
            "learners_name": entryData.learners_name,
            "learner_enrolled": entryData.learner_enrolled,
            "learners_mail": entryData.learners_mail,
            "learners_courses": entryData.learners_courses
        };

        // Set Info
        const renderedHTML = Mustache.render(template, info);
        containerDiv.innerHTML = renderedHTML;

    }

}
