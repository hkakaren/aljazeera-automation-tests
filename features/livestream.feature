@livestream
Feature: Livestream Player

  Background:
    Given I am on the AlJazeera live page

  Scenario: Livestream player should be visible
    Then the player should be visible

  Scenario: Switch Player button should be visible
    Then the Switch Player button should be visible
