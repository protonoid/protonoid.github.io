---
title: Dart Flutter json_serializable
description: Utility to serialize and deserialize JSON objects in Dart / Flutter. This package depends on json_annotations and build_runner
---

# json_serializable

## Introduction

Unlike languages like NodeJs / Javascript or Python, which handles JSON values very easily, statically typed languages like Dart can be little challenging to implement the serialization and deserialization. For small projects, we can write serialization and deserialization by hand. For larger projects the boilerplate code itself will consume a lot of dev hours. So, we switch to [json_serializable \| Dart Package](https://pub.dev/packages/json_serializable).

Here, we take an example of "Books - Authors - Publishers".

## Installation
In `pubspec.yaml` file, you can declare the dependencies it as follows:

```yaml
dependencies:
  json_annotation: ^3.0.1

dev_dependencies:
  build_runner: ^1.7.2
  json_serializable: ^3.2.5
```
Now you can `pub get` to install all the dependencies.

## Usage

### Project directory structure
Generally, we have `dart` file in a `models` directory like below
```bash
lib
├── layout
│   ├── primary.dart
│   └── campaign.dart
├── main.dart
├── models
│   ├── book.dart
│   ├── author.dart
│   ├── publisher.dart
├── screens
│   ├── dashboard.dart
│   ├── loading.dart
│   ├── login.dart
│   ├── root.dart
└── widgets
    ├── book_list.dart
    ├── author_list.dart
    ├── publisher_list.dart
```

### Class declaration
Inside `book.dart`, we would have defined the class `Book`.

```dart
class Book {
  String name;
  String ISBN;
  List<Author> authors;
  Publisher publisher;
  double price;
}

```
Similarly for `Author` and `Publisher`, we have something like:
```dart
class Author {
    String name;
    int age;
    int id;
    List<Book> booksAuthored;
}

class Publisher {
    String name;
    List<Book> booksPublished;
}
```

### The main part
Simply adding the annotation `@JsonSerializable` is enough to create the corresponding part files during build time.
```dart
import 'package:json_annotation/json_annotation.dart';

part 'book.g.dart';

@JsonSerializable
class Book {
    // ...
}
```

- Line 1: Since we are adding annotations to the file, we need to import `json_annotation` package added in `dependencies`.
- Line 3: The build will generate a file with name `<filename>.g.dart`. So, the definitions for `fromJson` and `toJson` will be available there. If the reference those functions from here, it will throw error. Since part of this file is separately available under another file named `book.g.dart`, we need to add this line here.
- Line 5: Annotation to generate the necessary functions like `_$bookFromJson` and `_$bookToJson`. These names are auto generated by the package.

## Build
We need to trigger the build to generate the corresponding `book.g.dart`, `author.g.dart` and `publishser.g.dart`.
```bash
flutter packages pub run build_runner build
```

## References
Two examples are given as part of main library itself:
- [json_serializable/example.dart at master · dart-lang/json_serializable · GitHub](https://github.com/dart-lang/json_serializable/blob/master/example/lib/example.dart)
- [json_serializable/json_converter_example.dart at master · dart-lang/json_serializable · GitHub](https://github.com/dart-lang/json_serializable/blob/master/example/lib/json_converter_example.dart)

Other sources are:
- [Support deserialization to default enum value for unsupported values · Issue #504 · dart-lang/json_serializable · GitHub](https://github.com/dart-lang/json_serializable/issues/504#issuecomment-509530737)
- [feature: allow customizing enum value serialization via annotations by kevmoo · Pull Request #251 · dart-lang/json_serializable · GitHub](https://github.com/dart-lang/json_serializable/pull/251/files#diff-8ecae88c9005ade7729762176511b1bf)
