import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { AuthActions } from 'src/app/auth/actions';
import { fromApp } from 'src/app/store';
import { TaskScenarioActions } from 'src/app/task-scenarios/actions';
import { UseScenarioActions, UseScenarioPageActions } from 'src/app/use-scenarios/actions';
import { SiteActions } from '../actions';
import { FileNode } from '../models';

export const siteFeatureKey = 'site';

export interface SiteState {
  isProjectBarOpen: boolean;
  isToolBarOpen: boolean;
  projectStructure: FileNode[];
  loading: boolean;
  sidebarWidth: string;
}

export interface State extends fromApp.State {
  [siteFeatureKey]: SiteState
}

const initialState: SiteState = {
  isProjectBarOpen: true,
  isToolBarOpen: false,
  loading: false,
  projectStructure: [
    {
      name: 'Work Reengineering & Conceptual Design',
      type: 'folder',
      children: [
        {
          name: 'Task Scenarios',
          type: 'folder',
          children: [
            {
              name: 'Search and request resource',
              type: 'file',
              link: '../task-scenarios/1',
            },
            {
              name: 'View updates and request resource',
              type: 'file',
            },
          ],
        },
        {
          name: 'Use Scenarios',
          type: 'folder',
          children: [
            {
              name: 'Search and request resource',
              type: 'file',
              link: '../use-scenarios',
            },
            {
              name: 'View updates and request resource',
              type: 'file',
            },
          ],
        },
        {
          name: 'Essential Use Cases',
          type: 'folder',
          children: [
            {
              name: 'Search and request resource',
              type: 'file',
            },
            {
              name: 'View updates and request resource',
              type: 'file',
            },
          ],
        },
        {
          name: 'Concrete Use Cases',
          type: 'folder',
          children: [
            {
              name: 'Search and request CD-ROM',
              type: 'file',
            },
            {
              name: 'View updates and request book',
              type: 'file',
            },
          ],
        },
        {
          name: 'Task Objects',
          type: 'folder',
          children: [
            { name: 'CD-ROM', type: 'file' },
            { name: 'Academic', type: 'file' },
          ],
        },
        {
          name: 'Content Diagram',
          type: 'folder',
          children: [
            {
              name: 'Content Diagram',
              type: 'file',
            },
            {
              name: 'Containers',
              type: 'folder',
              children: [
                { name: 'Main', type: 'file' },
                { name: 'Enter search criteria', type: 'file' },
                { name: 'View search results', type: 'file' },
              ],
            },
            {
              name: 'Sections',
              type: 'folder',
              children: [
                { name: 'Search and request CD-ROM', type: 'file' },
                { name: 'View updates and request book', type: 'file' },
              ],
            },
            {
              name: 'Screen Design',
              type: 'folder',
              children: [
                { name: 'Enter search criteria', type: 'file' },
                { name: 'View search results', type: 'file' },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Architecture',
      type: 'folder',
      children: [
        {
          name: 'Glossary',
          type: 'file',
        },
        {
          name: 'Use Case Diagram',
          type: 'folder',
          children: [
            {
              name: 'Use Case Diagram',
              type: 'file',
            },
            {
              name: 'Sections',
              type: 'folder',
              children: [
                { name: 'Search and request resource', type: 'file' },
                { name: 'View updates and request resource', type: 'file' },
              ],
            },
          ],
        },
        {
          name: 'Schematics',
          type: 'folder',
          children: [
            {
              name: 'Action Schemes',
              type: 'folder',
              children: [
                { name: 'Search and request resource', type: 'file' },
                { name: 'View updates and request resource', type: 'file' },
              ],
            },
            {
              name: 'Data Schemes',
              type: 'folder',
              children: [
                { name: 'CD-ROM', type: 'file' },
                { name: 'Academic', type: 'file' },
              ],
            },
          ],
        },
        {
          name: 'Activity Diagram',
          type: 'folder',
          children: [
            { name: 'Search and request resource', type: 'file' },
            { name: 'View updates and request resource', type: 'file' },
          ],
        },
        {
          name: 'Elementary Data Semantics',
          type: 'folder',
          children: [
            {
              name: 'Elementary Data Semantics',
              type: 'file',
            },
            {
              name: 'Thing Schematics',
              type: 'folder',
              children: [
                { name: 'CD-ROM', type: 'file' },
                { name: 'Academic', type: 'file' },
              ],
            },
            {
              name: 'Sections',
              type: 'folder',
              children: [
                { name: 'Search and request CD-ROM', type: 'file' },
                { name: 'View updates and request book', type: 'file' },
              ],
            },
          ],
        },
        {
          name: 'Static Object Semantics',
          type: 'folder',
          children: [
            {
              name: 'Static Object Semantics',
              type: 'file',
            },
            {
              name: 'Sections',
              type: 'folder',
              children: [
                { name: 'Search and request CD-ROM', type: 'file' },
                { name: 'View updates and request book', type: 'file' },
              ],
            },
          ],
        },
        {
          name: 'Object Interaction',
          type: 'folder',
          children: [
            { name: 'Search and request resource', type: 'file' },
            { name: 'View updates and request resource', type: 'file' },
          ],
        },
        {
          name: 'Component Diagram',
          type: 'folder',
          children: [
            {
              name: 'Component Implementation Semantics',
              type: 'folder',
              children: [
                {
                  name: 'Sections',
                  type: 'folder',
                  children: [
                    { name: 'Search and request resource', type: 'file' },
                    { name: 'View updates and request resource', type: 'file' },
                  ],
                },
              ],
            },
            {
              name: 'Component Interface Semantics',
              type: 'folder',
              children: [
                {
                  name: 'Sections',
                  type: 'folder',
                  children: [
                    { name: 'Search and request resource', type: 'file' },
                    { name: 'View updates and request resource', type: 'file' },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'Cross Component Behavior',
          type: 'folder',
          children: [
            { name: 'Search and request resource', type: 'file' },
            { name: 'View updates and request resource', type: 'file' },
          ],
        },
      ],
    },
  ],
  sidebarWidth: "250px",
};

export const reducer = createReducer(
  initialState,
  // todo: Move toggling of loading spinner to own effect
  on(
    AuthActions.startLogin,
    AuthActions.startSignUp,
    state => ({ ...state, loading: true })
  ),
  on(
    TaskScenarioActions.loadTaskScenarios,
    UseScenarioActions.loadUseScenarios,
    state => ({ ...state, loading: false })
  ),
  on(
    AuthActions.authenticationSucceeded,
    state => ({ ...state, loading: false })
  ),
  on(
    UseScenarioPageActions.fetchUseScenarios,
    state => ({ ...state, loading: true })
  ),
  on(
    SiteActions.toggleProjectBar,
    state => ({ ...state, isProjectBarOpen: !state.isProjectBarOpen })
  ),
  on(
    SiteActions.toggleToolBar,
    state => ({ ...state, isToolBarOpen: !state.isToolBarOpen })
  ),
  on(
    SiteActions.sidebarWidthChange,
    (state, { width }) => ({ ...state, sidebarWidth: width })
  ),
  on(
    TaskScenarioActions.addTaskScenario,
    (state: SiteState, { taskScenario }) => {

      const { projectStructure } = state;
      const newProjectStructe = [
        {
          ...projectStructure[0],
          children: [
            {
              ...projectStructure[0].children[0],
              children: [
                ...projectStructure[0].children[0].children,
                {
                  name: taskScenario.title,
                  type: "file",
                  link: `../task-scenarios/${taskScenario.id}`,
                }
              ]
            },
            {
              ...projectStructure[0].children[1],
              children: [
                ...projectStructure[0].children[1].children,
                {
                  name: taskScenario.title,
                  type: "file",
                  link: `../use-scenarios/${taskScenario.id}`,
                }
              ]
            },
            ...projectStructure[0].children.slice(1)
          ]
        },
        { ...projectStructure[1] }
      ]

      return { ...state, projectStructure: [...newProjectStructe] };
    }
  )
);


/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
export const selectSiteState = createFeatureSelector<State, SiteState>(
  siteFeatureKey
);

export const selectIsProjectBarOpen = createSelector(
  selectSiteState,
  state => state.isProjectBarOpen
);

export const selectIsToolBarOpen = createSelector(
  selectSiteState,
  state => state.isToolBarOpen
);

export const selectProjectStructure = createSelector(
  selectSiteState,
  state => state.projectStructure
);

export const selectSidebarWidth = createSelector(
  selectSiteState,
  state => state.sidebarWidth
);

export const selectIsLoading = createSelector(
  selectSiteState,
  state => state.loading
);