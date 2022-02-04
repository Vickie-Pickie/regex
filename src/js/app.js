export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const allWordCharactersDash = /^[\w-]+$/img;
    const dashOrUnderscoreOrNumericAreNotAllowedBegin = /^[^\d_-]/mg;
    const dashOrUnderscoreOrNumericAreNotAllowedEnd = /[^\d_-]$/mg;
    const moreThanThreeNumericInRow = /\d{4,}/mg;

    if (
      allWordCharactersDash.test(this.name)
      && !moreThanThreeNumericInRow.test(this.name)
      && dashOrUnderscoreOrNumericAreNotAllowedBegin.test(this.name)
      && dashOrUnderscoreOrNumericAreNotAllowedEnd.test(this.name)
    ) {
      return 'корректно';
    }
    return 'некорректно';
  }
}
