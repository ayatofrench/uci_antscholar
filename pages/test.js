
import React from 'react';
//import bulmaSteps from '../node_modules/bulma-extensions/bulma-steps/dist/bulma-steps.min.js';
const backgroundColor = '#eee';
import 'styles/styles.scss';

export default () => (
  <section class="section">
    <div class="container">
    <div class="columns is-vcentered is-desktop">
      <div class="column box">
    <h1 className="title is-size-1 has-text-centered">AntScholar Submission</h1>
    <div class="steps" id="stepsDemo">
    <div class="step-item is-active is-success">
      <div class="step-marker">1</div>
      <div class="step-details">
        <p class="step-title">Contact</p>
      </div>
    </div>
    <div class="step-item">
      <div class="step-marker">2</div>
      <div class="step-details">
        <p class="step-title">Position Information</p>
      </div>
    </div>
    <div class="step-item">
      <div class="step-marker">3</div>
      <div class="step-details">
        <p class="step-title">Position Details</p>
      </div>
    </div>
    <div class="step-item">
      <div class="step-marker">4</div>
      <div class="step-details">
        <p class="step-title">Finish</p>
      </div>
    </div>
    <div class="steps-content">
      <div class="step-content has-text-centered is-active">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Full Name</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input class="input is-medium" name="fullname" id="fullanme" type="text" placeholder="Last Name, First Name" autoFocus data-validate="require" />
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Office Location</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control has-icon has-icon-right">
                <input class="input" type="text" name="location" id="location" placeholder="e.g. DBH 6011" data-validate="require" />
              </div>
            </div>
          </div>
        </div>
        <div class="field is-grouped is-grouped-centered">
          <div class="field-label is-normal">
            <label class="label">Contact Email</label>
          </div>
          <div class="field-body">
            <div class="field has-addons">
              <div class="control has-icon has-icon-right">
                <input class="input" type="text" name="email" id="email" placeholder="professor" data-validate="require" />
              </div>
              <p class="control">
                <a class="button is-static">
                  @uci.edu
                </a>
            </p>
            </div>
          </div>
          <div class="field-label is-normal">
            <label class="label">Contact Phone</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control has-icon has-icon-right">
                <input class="input" type="text" name="phone" id="phone" placeholder="1(234)567-8910" data-validate="require" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="step-content has-text-centered">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Firstname</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input class="input" name="firstname" id="firstname" type="text" placeholder="Firstname" autoFocus data-validate="require" />
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Last name</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control has-icon has-icon-right">
                <input class="input" type="text" name="lastname" id="lastname" placeholder="Last name" data-validate="require" />
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Email</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control has-icon has-icon-right">
                <input class="input" type="email" name="email" id="email" placeholder="Email" data-validate="require" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="step-content has-text-centered">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Facebook account</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input class="input" name="facebook" id="facebook" type="text" placeholder="Facebook account url" autoFocus data-validate="require" />
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Twitter account</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input class="input" name="twitter" id="twitter" type="text" placeholder="Twitter account url" autoFocus data-validate="require"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="step-content has-text-centered">
        <h1 class="title is-4">Your account is now created!</h1>
      </div>
    </div>
    <div class="steps-actions">
      <div class="steps-action">
        <a href="#" data-nav="previous" class="button is-light">Previous</a>
      </div>
      <div class="steps-action">
        <a href="#" data-nav="next" class="button is-light">Next</a>
      </div>
    </div>
    </div>
  </div>
  </div>
  </div>
  <footer>
    <script src="https://cdn.jsdelivr.net/npm/bulma-steps@2.2.1/dist/js/bulma-steps.js"></script>
    <script>bulmaSteps.attach();</script>
  </footer>
</section>
);