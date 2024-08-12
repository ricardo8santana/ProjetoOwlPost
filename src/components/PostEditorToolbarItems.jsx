import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import * as regularIcons from '@fortawesome/free-regular-svg-icons';

import { commands } from '@uiw/react-md-editor';

const IconWithNumber = ({ icon, numberIcon }) => {
    return (
        <>
            <FontAwesomeIcon icon={icon} />
            <FontAwesomeIcon style={{
                padding: 0,
                width: '8px',
                height: '8px'
            }} icon={numberIcon} />
        </>
    );
};

const bold = commands.bold;
bold.icon = <FontAwesomeIcon icon={solidIcons.faBold} />;

const italic = commands.italic;
italic.icon = <FontAwesomeIcon icon={solidIcons.faItalic} />;

const strikethrough = commands.strikethrough;
strikethrough.icon = <FontAwesomeIcon icon={solidIcons.faStrikethrough} />;

const hr = commands.hr;
hr.icon = <FontAwesomeIcon icon={solidIcons.faMinus} />;

const title = commands.title;
title.icon = <FontAwesomeIcon icon={solidIcons.faHeading} />;

const title1 = commands.title1;
title1.icon = <IconWithNumber icon={solidIcons.faHeading} numberIcon={solidIcons.fa1} />;

const title2 = commands.title2;
title2.icon = <IconWithNumber icon={solidIcons.faHeading} numberIcon={solidIcons.fa2} />;

const title3 = commands.title3;
title3.icon = <IconWithNumber icon={solidIcons.faHeading} numberIcon={solidIcons.fa3} />;

const title4 = commands.title4;
title4.icon = <IconWithNumber icon={solidIcons.faHeading} numberIcon={solidIcons.fa4} />;

const title5 = commands.title5;
title5.icon = <IconWithNumber icon={solidIcons.faHeading} numberIcon={solidIcons.fa5} />;

const title6 = commands.title6;
title6.icon = <IconWithNumber icon={solidIcons.faHeading} numberIcon={solidIcons.fa6} />;

const link = commands.link;
link.icon = <FontAwesomeIcon icon={solidIcons.faLink} />;

const quote = commands.quote;
quote.icon = <FontAwesomeIcon icon={solidIcons.faQuoteRight} />;

const comment = commands.comment;
comment.icon = <FontAwesomeIcon icon={regularIcons.faMessage} />;

const image = commands.image;
image.icon = <FontAwesomeIcon icon={regularIcons.faImage} />;

const table = commands.table;
table.icon = <FontAwesomeIcon icon={solidIcons.faTable} />;

const ulist = commands.unorderedListCommand;
ulist.icon = <FontAwesomeIcon icon={solidIcons.faListUl} />;

const olist = commands.orderedListCommand;
olist.icon = <FontAwesomeIcon icon={solidIcons.faListOl} />;

const checklist = commands.checkedListCommand;
checklist.icon = <FontAwesomeIcon icon={solidIcons.faListCheck} />;

const help = commands.help;
help.icon = <FontAwesomeIcon icon={regularIcons.faCircleQuestion} />;

const editMode = commands.codeEdit;
editMode.icon = <FontAwesomeIcon icon={solidIcons.faPenToSquare} />;

const liveMode = commands.codeLive;
liveMode.icon = <FontAwesomeIcon icon={solidIcons.faTableColumns} />;

const readMode = commands.codePreview;
readMode.icon = <FontAwesomeIcon icon={solidIcons.faBookOpen} />;

const fullscreenMode = commands.fullscreen;
fullscreenMode.icon = <FontAwesomeIcon icon={solidIcons.faExpand} />;

const heading = commands.group([commands.title1, commands.title2, commands.title3, commands.title4, commands.title5, commands.title6], {
    name: 'title',
    groupName: 'title',
    buttonProps: { 'aria-label': 'Insert title' },
    icon: <FontAwesomeIcon icon={solidIcons.faHeading} />
});

const toolbarCommands = [
    bold, italic, strikethrough, hr, heading,
    commands.divider,
    link, quote, comment, image, table,
    commands.divider,
    ulist, olist, checklist,
    commands.divider,
    help
];

const extraToolbarCommands = [
    editMode, liveMode, readMode, commands.divider, fullscreenMode
];

export { toolbarCommands, extraToolbarCommands };