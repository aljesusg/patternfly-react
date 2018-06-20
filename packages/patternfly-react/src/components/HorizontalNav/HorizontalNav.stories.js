import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import {
    storybookPackageName,
    DOCUMENTATION_URL,
    STORYBOOK_CATEGORY
} from 'storybook/constants/siteConstants';

import { Masthead, ListGroup, ListGroupItem, MenuItem } from '../../index';


import { name } from '../../../package.json';


import pfLogo from 'storybook/img/logo-alt.svg';
import pfBrand from 'storybook/img/brand-alt.svg';

const stories = storiesOf(
    `${storybookPackageName(name)}/${
        STORYBOOK_CATEGORY.NAVIGATION
        }/Horizontal Navigation`,
    module
);
stories.addDecorator(withKnobs);
stories.addDecorator(
    defaultTemplate({
        title: 'Standard Horizontal Navigation',
        description:
            'Please click "Show Info" for example source and component documentation.',
        documentationLink: `${
            DOCUMENTATION_URL.PATTERNFLY_ORG_NAVIGATION
            }horizontal-navigation/`
    })
);


stories.addWithInfo('Horizontal Navigation', '', () => (
    <div>
        <Masthead
            iconImg={pfLogo}
            titleImg={pfBrand}
            title="Patternfly React"
        >
            <Masthead.Collapse>
                <Masthead.Dropdown
                    id="app-help-dropdown"
                    title={<span title="Help" className="pficon pficon-help" />}
                >
                    <MenuItem eventKey="1">Help</MenuItem>
                    <MenuItem eventKey="2">About</MenuItem>
                </Masthead.Dropdown>
                <Masthead.Dropdown
                    id="app-user-dropdown"
                    title={
                        <span>
              <span title="Help" className="pficon pficon-user" />
              <span className="dropdown-title"> Brian Johnson</span>
            </span>
                    }
                >
                    <MenuItem eventKey="1">User Preferences</MenuItem>
                    <MenuItem eventKey="2">Logout</MenuItem>
                </Masthead.Dropdown>
            </Masthead.Collapse>
        </Masthead>
        <ListGroup bsClass="nav navbar-nav navbar-primary">
            <ListGroupItem bsClass="">
                <a href="#0">First Link</a>
            </ListGroupItem>
            <ListGroupItem bsClass="" active>
                <a href="#0">Another Link</a>
            </ListGroupItem>
            <ListGroupItem bsClass="">
                <a href="#0">And Another</a>
            </ListGroupItem>
        </ListGroup>
    </div>
));
