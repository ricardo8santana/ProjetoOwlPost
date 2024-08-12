import { commands } from '@uiw/react-md-editor';


const bold = commands.bold;
bold.icon = (<svg width="12" height="12" viewBox="0 0 384 512"><path fill="currentColor" d="M0 64c0-17.7 14.3-32 32-32h192c70.7 0 128 57.3 128 128 0 31.3-11.3 60.1-30 82.3 37.1 22.4 62 63.1 62 109.7 0 70.7-57.3 128-128 128H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V96H32C14.3 96 0 81.7 0 64m224 160c35.3 0 64-28.7 64-64s-28.7-64-64-64H112v128zm-112 64v128h144c35.3 0 64-28.7 64-64s-28.7-64-64-64z"/></svg>);

const italic = commands.italic;
italic.icon = (<svg width="12" height="12" viewBox="0 0 384 512"><path d="M128 64c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32s-14.3 32-32 32h-58.7L160 416h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h58.7L224 96h-64c-17.7 0-32-14.3-32-32"/></svg>);

const strikethrough = commands.strikethrough;
const hr = commands.hr;
const title = commands.title;
const title1 = commands.title1;
const title2 = commands.title2;
const title3 = commands.title3;
const title4 = commands.title4;
const title5 = commands.title5;
const title6 = commands.title6;
const link = commands.link;
const quote = commands.quote;
const code = commands.code;
const codeBlock = commands.codeBlock;
const comment = commands.comment;
const image = commands.image;
const table = commands.table;
const ulist = commands.unorderedListCommand;
const olist = commands.orderedListCommand;
const checklist = commands.checkedListCommand;
const help = commands.help;


export { bold };