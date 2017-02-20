---
layout: main
title: Home
permalink: index.html
---
<div class="ui vertical stripe segment">
  <div class="ui middle aligned stackable grid container">
    <div class="row">
      <div class="eight wide column">
        <h3 class="ui header">
          Schema Language
        </h3>
        <p>
          SchemaLib is a language which allows you to define schemas for various parts of your app or service.
          It provides a full description of data structures, API services and contracts between clients and servers.
        </p>
        <h3 class="ui header">
          Searchable Schema Library
        </h3>
        <p>
          Fullly searchable library of various data, service and app schemas.
          No need to design schemas your self, just search the schema library and include it in your project.
        </p>
      </div>
      <div class="six wide column">
      <div class="ui compact vertical segment">
      <pre class="language-graphql line-numbers" style="padding-left: 0em;">
          <code>
          // describing user structure
          type user {
              +id: number! // + protected field
              firstName: string! //first name
              lastName: string!  // last name required
              username: string!
              -password: string! // - Private field
          }

          // employee extending user
          type employee extends user {
              job: string
          }

          // account services uses the
          // above defined user type
          service account {
              //logs the user in
              +action login {
                  request: user
                  response: array
              }
          }
          </code>
      </pre>
      </div>
    </div>
    </div>
    <div class="row">
      <div class="center aligned column">
        <a class="ui huge button">Find Out More</a>
      </div>
    </div>
  </div>
</div>
