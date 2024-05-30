# Federated Systems

Federated Systems is a subset of Distributed Systems where each of the components are created and maintened by different teams, and normally governed by unrelated bodies. The way these are creeated usually starts with someone having some set of data they think might be useful to someone else.

The preliminary setup is usually quite vague, where the initiator might just make all of their data available as a data dump, either as a downloadable file or through a simple Web API.

As times goes on, and if others find the data useful, there might be a discussion between the provider and consumers of the API regarding a more formal contract for how it should be structured leading to standards and specifications. For Web APIs these might come in the shape of versioned OpenAPI, AsyncAPI schemas (there exists quite a bit of these depending on the message format, communication method and other aspects).

## Examples

### Govermental Data

The Norwegian Government have mandate each of its subdivisions to make any data they are gathering available to the general public and private companies (barring data that is sensitive or contains private information).

### OpenID Connect

OpenID Connect is a identity authentication protocol that is an extension of the OAuth v2.0 that standardize the process of authenticating and authorizing users of digital services.

## Project

### Clients

Here are different clients that makes use of the data exposed by the various backends

### Backends

Here are systems which exposes some form of API for interacting with some data or provides some functions others can make use of.
