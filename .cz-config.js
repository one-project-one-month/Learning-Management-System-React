export default {
  types: [
    {
      value: ":sparkles: feat",
      name: "✨ feat:\tAdding a new feature",
    },
    {
      value: ":bug: fix",
      name: "🐛 fix:\tFixing a bug",
    },
    {
      value: ":memo: docs",
      name: "📝 docs:\tAdd or update documentation",
    },
    {
      value: ":lipstick: style",
      name: "💄 style:\tAdd or update styles, ui or ux",
    },
    {
      value: ":recycle: refactor",
      name: "♻️  refactor:\tCode change that neither fixes a bug nor adds a feature",
    },
    {
      value: ":zap: perf",
      name: "⚡️ perf:\tCode change that improves performance",
    },
    {
      value: ":white_check_mark: test",
      name: "✅ test:\tAdding tests cases",
    },
    {
      value: ":truck: chore",
      name: "🚚 chore:\tChanges to the build process or auxiliary tools\n\t\tand libraries such as documentation generation",
    },
    {
      value: ":rewind: revert",
      name: "⏪️ revert:\tRevert to a commit",
    },
    {
      value: ":construction: wip",
      name: "🚧 wip:\tWork in progress",
    },
    {
      value: ":construction_worker: build",
      name: "👷 build:\tAdd or update regards to build process",
    },
    {
      value: ":green_heart: ci",
      name: "💚 ci:\tAdd or update regards to build process",
    },
  ],
  messages: {
    type: "Select the type of change that you're committing:",
    scope: "\nDenote the SCOPE of this change (optional):",
    customScope: "Denote the SCOPE of this change:",
    subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: "List any BREAKING CHANGES (optional):\n",
    footer:
      "List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n",
    confirmCommit: "Are you sure you want to proceed with the commit above?",
  },

  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
  skipQuestions: ["footer", "breaking"],
  subjectLimit: 100,
};
