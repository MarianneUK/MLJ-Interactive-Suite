# MLJ Data Standard

**Version:** 1.0
**Project:** MLJ Interactive Learning Suite
**Author:** Marianne Johany
**Last Updated:** June 2026

---

# Purpose

This document defines the data standards used throughout the MLJ Interactive Learning Suite.

Its purpose is to ensure that all learning content is:

* Consistent
* Reusable
* Easy to maintain
* Scalable

Every activity in the MLJ Interactive Suite should use these standards wherever possible.

---

# Project Philosophy

The MLJ Interactive Suite separates:

* **Content** (JSON)
* **Logic** (JavaScript)
* **Presentation** (HTML/CSS)

This allows a single dataset to power multiple learning activities including:

* Flashcards
* Crosswords
* Word Searches
* Gap Fill exercises
* Multiple Choice quizzes
* Pronunciation practice
* AI-generated lessons
* Future MLJ applications

---

# Folder Structure

```text
data/
│
├── vocabulary/
├── grammar/
├── pronunciation/
├── culture/
└── quizzes/
```

Each folder contains JSON files organised by topic.

Examples:

```text
data/vocabulary/values.json
data/vocabulary/travel.json
data/grammar/present-simple.json
data/culture/british-measurements.json
```

---

# File Naming Convention

Use:

* lowercase
* hyphens
* descriptive names

Good:

```text
values.json
british-measurements.json
present-simple.json
minimal-pairs.json
```

Avoid:

```text
Values.JSON
BritishMeasurements.json
present_simple.json
```

---

# Vocabulary File Structure

Each vocabulary file should follow this structure.

```json
{
    "title": "Values",
    "description": "Vocabulary describing personal values and character.",
    "level": "A2-B1",
    "type": "vocabulary",
    "entries": []
}
```

## Top-Level Fields

| Field       | Description                         |
| ----------- | ----------------------------------- |
| title       | Display name                        |
| description | Short explanation                   |
| level       | CEFR level or range                 |
| type        | Data category                       |
| entries     | Array containing vocabulary entries |

---

# Vocabulary Entry Standard

Every vocabulary item should follow this schema.

```json
{
    "id": 1,
    "word": "Generous",
    "definition": "Kind and willing to give or share.",
    "level": "B1",
    "topic": "values",
    "partOfSpeech": "adjective",
    "pronunciation": "/ˈdʒenərəs/",
    "example": "She was very generous with her time.",
    "synonyms": [
        "kind",
        "giving"
    ],
    "antonyms": [
        "selfish",
        "mean"
    ]
}
```

## Required Fields

| Field         | Description                       |
| ------------- | --------------------------------- |
| id            | Unique identifier within the file |
| word          | Vocabulary item                   |
| definition    | Learner-friendly definition       |
| level         | CEFR level                        |
| topic         | Topic name                        |
| partOfSpeech  | Grammar category                  |
| pronunciation | IPA transcription                 |
| example       | Example sentence                  |
| synonyms      | Array of synonyms                 |
| antonyms      | Array of antonyms                 |

---

# Optional Vocabulary Fields

These may be added in future versions.

```json
{
    "collocations": [
        "generous offer",
        "generous donation"
    ],

    "commonMistakes": [
        "Do not confuse 'generous' with 'general'."
    ],

    "notes": "Often used to describe people, gifts and offers."
}
```

---

# Grammar Entry Standard

```json
{
    "id": 1,
    "title": "Present Simple",
    "rule": "Use the present simple for habits, routines and general facts.",
    "level": "A1",
    "example": "She works in Cambridge.",
    "negative": "She doesn't work in London.",
    "question": "Does she work here?",
    "commonMistake": "Remember the third person -s."
}
```

---

# Pronunciation Entry Standard

```json
{
    "id": 1,
    "sound": "/θ/",
    "targetWord": "think",
    "minimalPair": "sink",
    "level": "A2",
    "example": "Think before you speak.",
    "tip": "Place your tongue gently between your teeth."
}
```

---

# Culture Entry Standard

```json
{
    "id": 1,
    "title": "British Measurements",
    "fact": "Road distances in Britain are measured in miles.",
    "level": "A2",
    "topic": "British Life",
    "example": "Cambridge is about 60 miles from London."
}
```

---

# Quiz Entry Standard

```json
{
    "id": 1,
    "question": "What is the capital of Scotland?",
    "options": [
        "Edinburgh",
        "Glasgow",
        "Cardiff",
        "Belfast"
    ],
    "answer": "Edinburgh",
    "level": "A2",
    "topic": "UK Culture"
}
```

---

# ID Rules

* IDs begin at 1.
* IDs must be unique within each file.
* IDs do not need to be unique across the whole project.

---

# Writing Guidelines

Definitions should be:

* Clear
* Concise
* Learner-friendly
* Appropriate for the CEFR level

Example sentences should:

* Sound natural
* Use real English
* Demonstrate the target word clearly
* Avoid unnecessary complexity

Whenever possible, examples should reflect authentic British English.

---

# Current Development Plan

## Vocabulary

* Values
* Emotions
* Food
* Travel
* Work

## Grammar

* Present Simple
* Present Continuous
* Past Simple
* Future Forms
* Conditionals

## Pronunciation

* Minimal Pairs
* Silent Letters
* TH Sounds
* Word Stress
* Connected Speech

## Culture

* British Measurements
* Cambridge
* British Food
* Transport
* Traditions

## Quizzes

* Capitals
* Phrasal Verbs
* Idioms
* Irregular Verbs
* Mixed Review

---

# Long-Term Vision

The MLJ Knowledge Base will become the single source of truth for all educational content used across the MLJ ecosystem.

Every application should read from the same data rather than duplicating information.

**Write the data once. Reuse it everywhere.**
