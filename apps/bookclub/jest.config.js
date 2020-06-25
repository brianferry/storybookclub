module.exports = {
  name: 'bookclub',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/bookclub',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
