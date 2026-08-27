Hello! This is the official website for the FTC-UK team Pancake Robotics!

All webpages are found in folders in main, all with the (required) file name "index.html".

All folders containing webpages should begin with Capital letters. All folders not intended to be used for webpage URLs should be fully lowercase (e.g. assets and its subfolders).

The assets folder contains all assets. Where relevant, these should be placed within organised subfolders. An exception to this is members.json and parts.csv. These should not be placed within subfolders. Another exception to this are the duplicated PancakePrint and SyrupSans .woff and .woff2 font files. These should remain in the same subfolder as the stylesheets. A copy of these fonts can be found at assets/fonts. If you move assets around, please remember to update their URLs in the relevant pages.





# Pancake Robotics Website Documentation

## Overview

This is the public-facing website for Pancake Robotics.

It is built with:

- HTML for pages and content
- CSS for styling
- JavaScript for interactive bits
- Tailwind CSS for utility classes
- Font Awesome for icons
- Custom fonts
- `assets/` for images and other files

## Page Names

The homepage is the only page without a suffix.

Every other page should use:

```text
Page Name | Pancake Robotics
```

For example:

```text
History | Pancake Robotics
Inventory | Pancake Robotics
Members | Pancake Robotics
```

## Pages

### Main Page

The homepage contains:

- About Us
- Navigation
- Links + Contacts
- Sponsors
- Member Channels
- Alumni Channels
- Credits
- Footer

If a major new page is added, remember to add it to the homepage navigation.

### History | Pancake Robotics

The History page is the team's timeline.

Timeline-specific styling is in:

```text
assets/stylesheets/TimelineStyles.css
```

When adding an event, copy an existing timeline entry and change the
content rather than making a new structure.

### Inventory | Pancake Robotics

The inventory comes from:

```text
assets/parts.csv
```

The page handles searching and filtering the parts.

**If you need to change the inventory, edit `parts.csv` instead of the
HTML.**

### Members | Pancake Robotics

Member information comes from:

```text
assets/members.json
```

The page uses this to build the member cards, search, department filters
and social links.

**If you need to change a member, edit `members.json` instead of the
HTML.**

## Shared Files

The main shared files are:

```text
assets/stylesheets/StyleSheet.css
assets/stylesheets/LightModeStyles.css
assets/stylesheets/SocialLinksStyles.css
assets/stylesheets/PageElements.js
```

Basically:

| If you're changing... | Look here |
|---|---|
| General styling | `StyleSheet.css` |
| Light mode | `LightModeStyles.css` |
| Social cards | `SocialLinksStyles.css` |
| Shared JavaScript | `PageElements.js` |
| Page-specific styling | That page |
| Page-specific JavaScript | That page |
| Images/media | `assets/` |
| Inventory | `assets/parts.csv` |
| Members | `assets/members.json` |

## Adding a Page

When adding a new page:

1. Copy the structure of an existing page.
2. Keep the shared CSS and JavaScript.
3. Use `Page Name | Pancake Robotics` for the title.
4. Add it to the navigation.
5. Check it on desktop and mobile.
6. Check both light and dark mode.

## Keeping Things Tidy

- Keep solutions simple.
- Reuse existing classes and components where possible.
- Don't duplicate code if it can be shared.
- Delete dead code rather than leaving it around.
- Comments should explain **why** something unusual is there.
- Check the browser console before publishing.
- Be careful when changing shared CSS or JavaScript — it can affect the
  whole site.

## Not Sure Where to Edit?

**Page content** → the relevant HTML page

**Inventory data** → `parts.csv`

**Member data** → `members.json`

**Shared styling** → `StyleSheet.css`

**Theme styling** → `LightModeStyles.css`

**Shared behaviour** → `PageElements.js`

**Page-specific stuff** → that page

**Images/media** → `assets/`

If you're unsure, find something similar that's already working and
follow that pattern.
