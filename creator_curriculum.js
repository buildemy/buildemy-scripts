/** ***************************************************************************************************************** */
/** REQUEST */
/** ***************************************************************************************************************** */

var current_url = window.myURL;

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();
var data;


makeRequest('/creator_people_learners_webflow', function(receivedData) {
    data = receivedData;
    populate_curriculum_courses()
});

// This is a test comment



/** ***************************************************************************************************************** */
/** FUNCTION */
/** ***************************************************************************************************************** */


function populate_curriculum_courses() {

    // TEMPLATE
    var template = `
        <div class="course_concept_toggle-2">
          <div id="w-node-_616df93c-49fa-79c1-8ee2-1c84520ba0cd-78312f02" class="course_no_div">
            <div class="course_no_oval">
              <div id="course_number0" class="course_number">1</div>
            </div>
          </div>
          <div id="w-node-_616df93c-49fa-79c1-8ee2-1c84520ba0d1-78312f02" class="course_details_right">
            <div class="course_intro_div">
              <div class="course_subcon_div">
                <div class="para_text_medium">{{ cur_course_name }}</div>
                <div class="para_text_xsmall grey_text"> {{ cur_modules }}</div>
              </div>
              <div id="w-node-_616df93c-49fa-79c1-8ee2-1c84520ba0d8-78312f02" class="toggle_expand_icon w-embed">
                <svg class="course_arrow" width="30" height="30" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <!-- SVG path data -->
                </svg>
              </div>
            </div>
            <div class="empty_padding"></div>
            <div class="content-accordion-2">
              <div id="content_flex" class="content-list">
                <!-- Content items here -->
              </div>
            </div>
          </div>
        </div>
    `;

    // RENDER
    for (const [index, entryData] of data["learners_info"].entries()) {
        // Create Div
        let containerDiv;
        containerDiv = document.createElement('div');
        containerDiv.setAttribute('id', ("learners_div" + index));
        containerDiv.setAttribute('class', 'learners-list-item');
        containerDiv.setAttribute('item-index', index);
        document.getElementById("course_overview_flex").appendChild(containerDiv);


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