'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((key) => key)
    .reduce((obj, key) => {
      const [prop, value] = key.split(':').map((el) => el.trim());

      function kebabToCamel(string) {
        if (string && string.includes('-')) {
          return string
            .split('-')
            .map((word, index) => {
              if (index === 0) {
                return word.toLowerCase();
              }

              return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            })
            .join('');
        }

        return string;
      }

      const camelProp = kebabToCamel(prop);
      const camelValue = kebabToCamel(value);

      if (camelProp) {
        obj[camelProp] = camelValue;
      }

      return obj;
    }, {});
}

module.exports = convertToObject;
