describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(($el) => {expect($el).to.have.value(75);});
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(($el) => {expect($el).to.have.value(33);});
  }); 

  it('Audio changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('audio').then(($el) => {expect($el).to.have.prop('volume', 0.33);});
  }); 

  it('Image and sound sources change selecting party horn radio button', () => {
    cy.get('#radio-party-horn').click();
    cy.get('#sound-image').then(($el) => {expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');});
    cy.get('#horn-sound').then(($el) => {expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');});
  }); 

  it('Volume image change, Level 0 by input', () => {
    cy.get('#volume-number').clear().type(0);
    cy.get('#volume-image').then(($el) => {expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');});
  });

  it('Volume image change, Level 1 by input', () => {
    for(let volume = 1; volume < 34; volume++){
      cy.get('#volume-number').clear().type(volume);
      cy.get('#volume-image').then(($el) => {expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');});
    }
  });

  it('Volume image change, Level 2 by input', () => {
    for(let volume = 34; volume < 67; volume++){
      cy.get('#volume-number').clear().type(volume);
      cy.get('#volume-image').then(($el) => {expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');});
    }
  });

  it('Volume image change, Level 3 by input', () => {
    for(let volume = 67; volume <= 100; volume++){
      cy.get('#volume-number').clear().type(volume);
      cy.get('#volume-image').then(($el) => {expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');});
    }
  });

  it('Volume image change, Level 0 by slider', () => {
    cy.get('#volume-slider').invoke('val', 0).trigger('input');
    cy.get('#volume-image').then(($el) => {expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');});
  });

  it('Volume image change, Level 1 by slider', () => {
    for(let volume = 1; volume < 34; volume++){
      cy.get('#volume-slider').invoke('val', volume).trigger('input');
      cy.get('#volume-image').then(($el) => {expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');});
    }
  });

  it('Volume image change, Level 2 by slider', () => {
    for(let volume = 34; volume < 67; volume++){
      cy.get('#volume-slider').invoke('val', volume).trigger('input');
      cy.get('#volume-image').then(($el) => {expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');});
    }
  });

  it('Volume image change, Level 3 by slider', () => {
    for(let volume = 67; volume <= 100; volume++){
      cy.get('#volume-slider').invoke('val', volume).trigger('input');
      cy.get('#volume-image').then(($el) => {expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');});
    }
  });

  it('Disabled honk button when textbox input is empty', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then(($el) => {expect($el).to.have.attr('disabled');});
  });

  it('Disabled honk button when textbox input is non-number', () => {
    cy.get('#volume-number').clear().type('letters');
    cy.get('#honk-btn').then(($el) => {expect($el).to.have.attr('disabled');});
  });

  it('Error shown when textbox input is out of range', () => {
    cy.get('#volume-number').clear().type('-1');
    cy.get('#volume-number:invalid').then(($el) => {expect($el).to.exist});
    cy.get('#volume-number').clear().type('101');
    cy.get('#volume-number:invalid').then(($el) => {expect($el).to.exist});
  });
  
});
