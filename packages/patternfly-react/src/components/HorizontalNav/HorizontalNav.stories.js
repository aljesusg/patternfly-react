import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import {
    storybookPackageName,
    DOCUMENTATION_URL,
    STORYBOOK_CATEGORY
} from 'storybook/constants/siteConstants';
import { action } from '@storybook/addon-actions';
import { HorizontalNav, HorizontalNavHeader, HorizontalCollapse, VerticalNavBrand, ListGroup, ListGroupItem, DropdownButton, MenuItem, Icon } from '../../index';


import { name } from '../../../package.json';


const title1 = <Icon type="pf" name="help" title="Help" />;
const title2 = (
    <span>
    <Icon type="pf" name="user" style={{ marginRight: 10 + 'px' }} />
    Brian Johnson
  </span>
);
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
    <HorizontalNav>
        <HorizontalNavHeader>
            <VerticalNavBrand
                href="/"
                iconImg="http://www.patternfly.org/assets/img/brand.svg"
            />
        </HorizontalNavHeader>
        <HorizontalCollapse>
            <ListGroup bsClass="nav navbar-nav navbar-utility">
                <ListGroupItem bsClass="">
                    <DropdownButton
                        title={title1}
                        id="help_button"
                        onClick={action('onClick')}
                    >
                        <MenuItem bsClass="" eventKey="1">
                            Help
                        </MenuItem>
                        <MenuItem bsClass="" eventKey="2">
                            About
                        </MenuItem>
                    </DropdownButton>
                </ListGroupItem>
                <ListGroupItem bsClass="dropdown">
                    <DropdownButton
                        title={title2}
                        id="user_button"
                        onClick={action('onClick')}

                    >
                        <MenuItem bsClass="" eventKey="1">
                            Link
                        </MenuItem>
                        <MenuItem bsClass="" eventKey="2">
                            Another link
                        </MenuItem>
                        <MenuItem bsClass="" eventKey="2">
                            Something else here
                        </MenuItem>
                    </DropdownButton>
                </ListGroupItem>
            </ListGroup>
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
        </HorizontalCollapse>
    </HorizontalNav>
));
