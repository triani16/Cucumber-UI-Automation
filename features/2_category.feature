Feature: Add New Category Kasiraja Demo Apps

  @feature=Category
  Scenario Outline: User Successfully Add New Category

    Given user already login to dashboard page 
    When user click kategori list 
    When user click tambah
    When user input nama <nama> and deskripsi <deskripsi>
    Then user get <message> message displayed

    Examples:
      | nama                | deskripsi           | message   |
      | anggur              | buah                | success   |