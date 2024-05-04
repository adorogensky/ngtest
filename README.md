# Setup
* There is an ``<input>`` element that is bound to a ``name`` form control<br>
* The ``name`` form control lives on a reactive form group
* The component subscribes to the ``FormGroup.valueChanges`` event loop and sets the ``reverseName`` component property accordingly 
* The ``reverseName`` property is bound to a ``span``'s element content
* There's a test that sets a value on the ``input`` element and triggers the input event via ``HTMLElement.dispatchEvent()`` and expects to see the new ``reverseName`` value
# Issue
The test fails because ``FormGroup.valueChanges`` is never called in the test.
It does, however, get called in the running app.
* This could be a test setup problem. In that case, I would like to 
move on with a PR request to change the Angular documentation [here](https://angular.io/guide/forms-overview#testing-reactive-forms) (which by the way needs to be updated anyway because ``createNewEvent`` function is not defined)
* If not, are there any workarounds? 
* If not, can this issue be escalated to the maintenance team as high priority?
