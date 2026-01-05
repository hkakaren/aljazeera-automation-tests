@mostread
Feature: Most Read Section

  Background:
    Given I am on the AlJazeera homepage

  @desktop
  Scenario: Most Read section should be visible on Desktop
    Given I am viewing the page on desktop
    When I look for the Most Read section
    Then the Most Read section should be visible

  @desktop
  Scenario: Most Read section should have 10 posts on Desktop
    Given I am viewing the page on desktop
    When I count the posts in Most Read section
    Then I should see exactly 10 posts

  @desktop @accessibility
  Scenario: Bypass block menu for Most Read should work  (accessibility)
    Given I am viewing the page on desktop
    When I click on the empty space near the logo
    And I press the TAB key
    And I click on "Skip to Most Read" link
    Then the URL should contain "#most-read-container"

  @mobile
  Scenario: Most Read section should not appear on Mobile
    Given I am viewing the page on mobile
    When I look for the Most Read section
    Then the Most Read section should not be visible
