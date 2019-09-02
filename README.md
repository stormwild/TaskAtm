# TaskAtm

## Pre-requisites

- .NET Core 3 Preview 8
- Git
- NodeJs v10+

## Setup

Clone the project

```
git clone git@github.com:stormwild/TaskAtm.git
```

## Build

Build the web application

```
cd TaskAtm/TaskAtm
dotnet build
```

Build the client application

```
cd ClientApp
npm run build
```

## Run

Run the application

```
cd ..
dotnet run
```

## Login Info

Application does not create a new account for newly registered users and the code is hard coded to use only the existing account with id 1 so please use the existing account to see the working demo.

```
Username/Email: artorrijos@gmail.com
Password: MyPassword_123#
```

## Demo

![](TaskAtm/docs/localhost_5001_dashboard.png)