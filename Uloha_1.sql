/*
    Zamestnanec (Employee)
    ID (PK)
    Meno
    Priezvisko
    E-mail
    Telefón
...
    Administrator (Admin)
    ID (PK)
    Meno
    Priezvisko
    E-mail
    Telefón
...
    Skolenie (Training)
    ID (PK)
    Nazov
    Popis
    Datum zaciatku
    Datum konca
    Autor (FK na tabulku Employee)
...
    Priradenie skolenia (TrainingAssignment)
    ID (PK)
    Zamestnanec (FK na tabulku Employee)
    Skolenie (FK na tabulku Training)
    Administrator (FK na tabulku Admin)
    Datum pridelenia
...
    Certifikat (Certificate)
    ID (PK)
    Zamestnanec (FK na tabulku Employee)
    Skolenie (FK na tabulku Training)
    Spolocnosť (textové pole pre evidenciu spolocnosti, u ktorej bol zamestnanec Skoleny a ziskal certifikat)
    Datum ziskania certifikatu

Poznamky:

    FK znaci cudzi kluc (foreign key)
    PK znaci primarny kluc (primary key)


*/



/*Priklad MySQL*/

CREATE TABLE Employee (
  ID INT PRIMARY KEY,
  Name VARCHAR(50),
  Surname VARCHAR(50),
  Email VARCHAR(50),
  Phone VARCHAR(20)
);

CREATE TABLE Admin (
  ID INT PRIMARY KEY,
  Name VARCHAR(50),
  Surname VARCHAR(50),
  Email VARCHAR(50),
  Phone VARCHAR(20)
);

CREATE TABLE Training (
  ID INT PRIMARY KEY,
  Name VARCHAR(100),
  Description VARCHAR(255),
  StartDate DATE,
  EndDate DATE,
  Author INT,
  FOREIGN KEY (Author) REFERENCES Employee(ID)
);

CREATE TABLE TrainingAssignment (
  ID INT PRIMARY KEY,
  EmployeeID INT,
  TrainingID INT,
  AdminID INT,
  AssignmentDate DATE,
  FOREIGN KEY (EmployeeID) REFERENCES Employee(ID),
  FOREIGN KEY (TrainingID) REFERENCES Training(ID),
  FOREIGN KEY (AdminID) REFERENCES Admin(ID)
);

CREATE TABLE Certificate (
  ID INT PRIMARY KEY,
  EmployeeID INT,
  TrainingID INT,
  Company VARCHAR(100),
  IssueDate DATE,
  FOREIGN KEY (EmployeeID) REFERENCES Employee(ID),
  FOREIGN KEY (TrainingID) REFERENCES Training(ID)
);