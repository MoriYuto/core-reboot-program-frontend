/** @type {import('stylelint').Config} */
module.exports = {
    "plugins": ["stylelint-order"], // stylelint-order 適用
    "extends": ["stylelint-config-standard"], // stylelint-config-standard のルール適用
    "rules": {
      // @~~~ ルール適用外
      "import-notation": "string",
      "custom-property-pattern": null,
      "at-rule-no-unknown": [
        true,
        {
          "ignoreAtRules": ["tailwind", "apply", "variants", "responsive", "screen", "theme"]
        }
      ],
      "order/properties-alphabetical-order": true // CSS プロパティ、アルファベット順
    },
    "ignoreFiles": ["**/node_modules/**"] // node_modules 内のスタイルファイルは対象外
  }