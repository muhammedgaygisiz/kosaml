import { createReducer, on } from '@ngrx/store';
import { AuthActions } from 'src/app/auth/actions';
import { TaskScenarioActions, TaskScenarioPageActions } from 'src/app/task-scenarios/actions';
import { SiteActions } from '../actions';
import { FileNode } from '../models';

export const siteFeatureKey = 'site';

export interface State {
  isProjectBarOpen: boolean;
  isToolBarOpen: boolean;
  projectStructure: FileNode[];
  loading: boolean;
}

const initialState: State = {
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
              link: '../task-scenarios',
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
};

export const reducer = createReducer(
  initialState,
  // todo: Move toggling of loading spinner to own effect
  on(AuthActions.startLogin, AuthActions.startSignUp, state => ({ ...state, loading: true })),
  on(TaskScenarioActions.loadTaskScenarios, state => ({ ...state, loading: false })),
  on(AuthActions.authenticationSucceeded, state => ({ ...state, loading: false })),
  on(TaskScenarioPageActions.fetchTaskScenarios, state => ({ ...state, loading: true })),
  on(SiteActions.toggleProjectBar, state => ({
    ...state,
    isProjectBarOpen: !state.isProjectBarOpen,
  })),
  on(SiteActions.toggleToolBar, state => ({ ...state, isToolBarOpen: !state.isToolBarOpen })),
);
