const questions = [
    {
      "number": 1,
      "question": "Wilhelm Wundt and his students used a technique known as _________ to study mental states.",
      "options": ["behaviorism", "intensity measurement", "componentialism", "introspection"],
      "answer": "introspection",
      "explanation": "Wundt and his students used introspection to study mental states by examining their own conscious thoughts and feelings."
    },
    {
      "number": 2,
      "question": "Which psychologist extensively tested his own memory to develop theories of cognition?",
      "options": ["Aristotle", "Wundt", "Ebbinghaus", "Chomsky"],
      "answer": "Ebbinghaus",
      "explanation": "Ebbinghaus was known for his self-experiments on memory, leading to the forgetting curve and other foundational cognitive theories."
    },
    {
      "number": 3,
      "question": "All connectionist models share the assumption that:",
      "options": ["a central processor directs the flow of information", "processing occurs in parallel", "knowledge is stored in various storehouses", "processing occurs serially"],
      "answer": "processing occurs in parallel",
      "explanation": "Connectionist models, inspired by neural networks, assume parallel processing rather than serial flow."
    },
    {
      "number": 4,
      "question": "The term “limited capacity processors” suggests that:",
      "options": ["computers have limited memory storage", "neurons can only fire at a certain rate", "human beings can only do so many things at once", "processing in the brain occurs in parallel"],
      "answer": "human beings can only do so many things at once",
      "explanation": "This term refers to humans’ limited ability to process multiple streams of information at the same time."
    },
    {
      "number": 5,
      "question": "A traditional “school” within psychology that had as its goal the identification of the simplest possible units of the mind:",
      "options": ["functionalism", "structuralism", "behaviorism", "componentialism"],
      "answer": "structuralism",
      "explanation": "Structuralism aimed to break down mental processes into the most basic components."
    },
    {
      "number": 6,
      "question": "Cognitive psychology is broad, and thus overlaps with many other fields including neuroscience, philosophy, and ______.",
      "options": ["botany", "astronomy", "linguistics", "mining"],
      "answer": "linguistics",
      "explanation": "Linguistics overlaps with cognitive psychology in studying language processing and mental representation."
    },
    {
      "number": 7,
      "question": "William James’s ideas regarding psychological phenomena centered around the idea of",
      "options": ["the sea of the subconscious", "a stream of consciousness", "a stream of subconsciousness", "a sea of consciousness"],
      "answer": "a stream of consciousness",
      "explanation": "James described consciousness as a continuous and dynamic flow, famously called the 'stream of consciousness'."
    },
    {
      "number": 8,
      "question": "A body of knowledge structured according to what its proponents consider important, which guides research topics and research methods, is called a ___________.",
      "options": ["hypothesis", "methodology", "paradigm", "metaphor"],
      "answer": "paradigm",
      "explanation": "A paradigm is a framework of theories, methods, and standards that defines scientific practice in a field."
    },
    {
      "number": 9,
      "question": "The analysis of information processing systems is of special interest to _____ psychology.",
      "options": ["behavioral", "biological", "psychoanalytic", "cognitive"],
      "answer": "cognitive",
      "explanation": "Cognitive psychology focuses on mental processes like perception, memory, and problem-solving."
    },
    {
      "number": 10,
      "question": "If you think of cognitive processing as a type of information processing, then the brain is the ______ and the cognitive processes themselves are the ______.",
      "options": ["response; stimulus", "hardware; software", "software; hardware", "stimulus; response"],
      "answer": "hardware; software",
      "explanation": "In this analogy, the brain acts as the hardware and cognitive functions are the software running on it."
    },
    {
      "number": 11,
      "question": "Which of the following processes the sensations coming into each sense organ, allowing us to understand and interpret the sensations we receive?",
      "options": ["environment", "sensory system", "stimulus", "brain"],
      "answer": "sensory system",
      "explanation": "The sensory system processes raw input from each sense organ and transmits it to the brain for further interpretation."
    },
    {
      "number": 12,
      "question": "Which of these psychological approaches focuses on how humans use principles of organization to understand our surroundings?",
      "options": ["perception-action", "gestalt", "top-down", "computational"],
      "answer": "gestalt",
      "explanation": "Gestalt psychology emphasizes the human tendency to perceive patterns and wholes rather than just individual components."
    },
    {
      "number": 13,
      "question": "The two best studied forms of perception are:",
      "options": ["visual and auditory", "visual and olfactory", "visual and haptic", "auditory and olfactory"],
      "answer": "visual and auditory",
      "explanation": "Vision and hearing are the most researched sensory modalities due to their dominance in human perception."
    },
    {
      "number": 14,
      "question": "Reversible figures illustrate the principle of:",
      "options": ["bottom-up processing", "figure-ground organization", "size constancy", "retinal imagery"],
      "answer": "figure-ground organization",
      "explanation": "Figure-ground organization is the ability to separate objects (figures) from their background (ground), often illustrated by reversible images."
    },
    {
      "number": 15,
      "question": "A stencil provides a good analogy for the theory of:",
      "options": ["top-down processing", "template matching", "good continuation", "featural analysis"],
      "answer": "template matching",
      "explanation": "Template matching theory compares incoming sensory input to stored templates in memory, similar to using a stencil to match a shape."
    },
    {
      "number": 16,
      "question": "Gibson’s theory of direct perception is in direct opposition to the ______ approach to perception.",
      "options": ["connectionist", "constructivist", "bottom-up", "gestalt"],
      "answer": "constructivist",
      "explanation": "Gibson rejected the idea that perception requires internal construction from incomplete data, opposing the constructivist view."
    },
    {
      "number": 17,
      "question": "Prototype matching theory argues that precepts are compared to ______ in memory.",
      "options": ["idealized representations", "abstract dot patterns", "gestalt principles", "lists of features"],
      "answer": "idealized representations",
      "explanation": "Prototype theory suggests we match new information with an 'idealized' mental representation stored in memory."
    },
    {
      "number": 18,
      "question": "___________ are to visual perception what phonemes are to language, according to Biederman.",
      "options": ["templates", "distal stimuli", "geons", "receptors"],
      "answer": "geons",
      "explanation": "Geons (geometric ions) are the building blocks of visual objects in Biederman’s Recognition-by-Components theory."
    },
    {
      "number": 19,
      "question": "Which of these help us estimate objects’ size and distance to aid in our perception?",
      "options": ["stimuli", "sensations", "cues", "neurons"],
      "answer": "cues",
      "explanation": "Cues such as perspective, shading, and motion help us perceive depth, distance, and size."
    },
    {
      "number": 20,
      "question": "You are eating a meal at an open-air restaurant a few hundred yards from the ocean. You hear a constant whooshing sound. According to the likelihood principle, what would you assume caused the noise?",
      "options": ["an earthquake", "a series of airplanes landing", "traffic a few miles away", "waves crashing on the beach"],
      "answer": "waves crashing on the beach",
      "explanation": "The likelihood principle suggests we interpret ambiguous stimuli in the most probable or familiar way—in this case, ocean waves."
    },
    {
      "number": 21,
      "question": "Noticing a red flower among a field of purple flowers illustrates ______.",
      "options": ["the attention capture phenomenon", "the cocktail party effect", "the bottleneck of attention", "a shadowing task"],
      "answer": "the attention capture phenomenon",
      "explanation": "This occurs when a highly distinctive stimulus (like a red flower among purple ones) automatically grabs attention due to its contrast with the surroundings."
    },
    {
      "number": 22,
      "question": "According to Treisman, if you listen to two competing messages simultaneously, you are more likely to pick up information from the second message if that message ______.",
      "options": ["relates to the other message", "was spoken more slowly", "includes a spotlight", "is louder"],
      "answer": "relates to the other message",
      "explanation": "Treisman's Attenuation Theory suggests that unattended information can still be processed if it has meaningful relevance to the attended message."
    },
    {
      "number": 23,
      "question": "Stroop interference lessens when:",
      "options": ["participants are given more practice at naming colors", "participants are encouraged to focus carefully", "participants are given more practice at reading color names", "participants are better readers"],
      "answer": "participants are given more practice at naming colors",
      "explanation": "Practicing color naming strengthens the ability to override automatic word reading, reducing interference in Stroop tasks."
    },
    {
      "number": 24,
      "question": "When listening to a conversation, your attention is momentarily diverted when you hear your name spoken in a different conversation across the room. This is an example of the:",
      "options": ["Stroop effect", "cocktail party effect", "dichotic listening phenomenon", "attenuation effect"],
      "answer": "cocktail party effect",
      "explanation": "The cocktail party effect describes detecting personally relevant stimuli (like your name) despite focusing on another auditory source."
    },
    {
      "number": 25,
      "question": "Broadbent, in proposing his filter theory of attention, argued that an attentional filter lets some information through and blocks out the rest. This filter is based upon:",
      "options": ["the meaning of the message", "a physical characteristic of the message, such as its location", "the importance of the message", "the number of repetitions of the message"],
      "answer": "a physical characteristic of the message, such as its location",
      "explanation": "Broadbent's Filter Theory posits that attention selects inputs based on physical attributes, such as pitch or spatial location."
    },
    {
      "number": 26,
      "question": "Our attention has been said to involve a ______ that filters out everything except the information we are attending to.",
      "options": ["net", "bottleneck", "switchboard", "bridge"],
      "answer": "bottleneck",
      "explanation": "The bottleneck metaphor highlights attention’s limited capacity, where only select stimuli are processed in detail."
    },
    {
      "number": 27,
      "question": "Which of these is known to influence the cocktail party effect?",
      "options": ["a person’s level of extroversion or introversion", "a person’s intelligence", "the salience of the message", "cultural differences in filtering abilities"],
      "answer": "the salience of the message",
      "explanation": "The salience or personal relevance of a stimulus, like hearing your name, determines whether it captures attention."
    },
    {
      "number": 28,
      "question": "According to ____ theory, we never actually acquire unattended material at all.",
      "options": ["capacity", "bottleneck", "schema", "attenuation"],
      "answer": "schema",
      "explanation": "Schema theory proposes we process only what fits our cognitive schemas and discard unrelated or unattended information."
    },
    {
      "number": 29,
      "question": "Children with attention deficit hyperactivity disorder (ADHD):",
      "options": ["are more likely to be girls than boys", "cannot sustain vigilance on repetitive or dull tasks", "cannot switch attention from one task to another", "cannot devote mental resources to tasks"],
      "answer": "cannot sustain vigilance on repetitive or dull tasks",
      "explanation": "ADHD is characterized by difficulty maintaining attention on repetitive or uninteresting tasks due to impaired sustained attention."
    },
    {
      "number": 30,
      "question": "According to Treisman, people tend to process:",
      "options": ["only as much as is necessary to separate the attended from the unattended message", "at the highest possible level given the amount of background distraction", "only to the level of linguistic characteristics, separating it into words", "only to the level of physical characteristics"],
      "answer": "only as much as is necessary to separate the attended from the unattended message",
      "explanation": "Treisman’s Attenuation Theory asserts minimal processing of unattended input—just enough to separate it from relevant input."
    },
    {
      "number": 31,
      "question": "Remembering your phone number in sequences such as xxx-xxx-xxxx and your Social Security number in sequences such as xxx-xx-xxxx are examples of ______.",
      "options": ["short-term memory", "encoding", "sensory memory", "chunking"],
      "answer": "chunking",
      "explanation": "Chunking is the process of grouping information into meaningful units to improve memory retention."
    },
    {
      "number": 32,
      "question": "The briefest form of memory is ______ memory.",
      "options": ["long-term", "working", "short-term", "sensory"],
      "answer": "sensory",
      "explanation": "Sensory memory holds raw sensory data for milliseconds to seconds before fading away unless attended to."
    },
    {
      "number": 33,
      "question": "The suffix effect relates to which type of memory?",
      "options": ["iconic", "echoic", "short term", "long term"],
      "answer": "echoic",
      "explanation": "The suffix effect refers to decreased recall of the last auditory item due to a non-meaningful sound—relating to echoic memory."
    },
    {
      "number": 34,
      "question": "The fact that the size of the memory set does affect search time in short-term memory suggests that:",
      "options": ["search is both self-terminating and serial", "search is a serial process", "search is a parallel process", "search is exhaustive"],
      "answer": "search is a serial process",
      "explanation": "Increased set size correlating with longer search times suggests a serial (item-by-item) memory search."
    },
    {
      "number": 35,
      "question": "Some experts describe memory as a ______, while others believe it is a ______.",
      "options": ["checklist; blueprint", "secret; journey", "structure; process", "ball of string; pool of water"],
      "answer": "structure; process",
      "explanation": "Memory is viewed as both a structure (e.g., short-term, long-term stores) and a process (e.g., encoding, storage, retrieval)."
    },
    {
      "number": 36,
      "question": "Which of these is a component of the memory formation process?",
      "options": ["retrieval", "interference", "modality", "inspiration"],
      "answer": "retrieval",
      "explanation": "Memory formation involves encoding, storage, and retrieval—retrieval being the act of recalling stored information."
    },
    {
      "number": 37,
      "question": "Unattended information is stored briefly in:",
      "options": ["sensory memory", "short-term memory", "long-term memory", "secondary memory"],
      "answer": "sensory memory",
      "explanation": "Sensory memory temporarily holds raw sensory inputs (e.g., sights, sounds) before selective attention processes them."
    },
    {
      "number": 38,
      "question": "In the absence of rehearsal, short-term memory tends to:",
      "options": ["last about 8 seconds", "last about 20 seconds", "decay slowly over 24 hours", "last for an unlimited amount of time"],
      "answer": "last about 20 seconds",
      "explanation": "Short-term memory typically lasts 15–30 seconds unless the material is rehearsed or encoded into long-term memory."
    },
    {
      "number": 39,
      "question": "The concept of fluid intelligence is highly related to:",
      "options": ["working memory capacity", "echoic memory capacity", "iconic memory capacity", "interference"],
      "answer": "working memory capacity",
      "explanation": "Fluid intelligence is the ability to reason and solve novel problems, closely tied to the capacity of working memory."
    },
    {
      "number": 40,
      "question": "One basic physiological mechanism for learning is the ____ rule, which states that if a synapse between two neurons is repeatedly activated at about the same time the postsynaptic neuron fires, the chemistry of the synapse changes.",
      "options": ["Baddeley", "Hebb", "Tulving", "Carlson"],
      "answer": "Hebb",
      "explanation": "The Hebb rule supports the idea of 'neurons that fire together, wire together,' a foundational principle in neuroplasticity."
    },
    {
      number: 41,
      question: "Ebbinghaus’s forgetting curve demonstrates that:",
      options: [
        "Forgetting is rapid at first and then levels off",
        "forgetting is slow at first and then speeds up",
        "forgetting occurs at a steady pace, beginning immediately after learning",
        "no forgetting occurs until 24 hours after learning"
      ],
      answer: "Forgetting is rapid at first and then levels off",
      explanation: "Ebbinghaus's forgetting curve shows that most forgetting happens soon after learning, then it slows down over time."
    },
    {
      number: 42,
      question: "Which of the following would be a part of your declarative memory system?",
      options: [
        "being able to name a hybrid car",
        "knowing how to react to a red light",
        "knowing how to drive a car",
        "knowing how to ride a bicycle"
      ],
      answer: "being able to name a hybrid car",
      explanation: "Declarative memory involves facts and information that can be consciously recalled, like naming a hybrid car. The other options involve procedural memory, related to skills and actions."
    },
    {
      number: 43,
      question: "A schema for a routine event, such as going to the dentist, is called a:",
      options: ["script", "category", "exemplar", "prototype"],
      answer: "script",
      explanation: "A script is a schema that represents a routine event, like going to the dentist, and outlines the typical sequence of actions in that situation."
    },
    {
      number: 44,
      question: "Information such as the name of the person who sat in front of you in the fifth grade is stored in:",
      options: ["sensory memory", "short-term memory", "working memory", "long-term memory"],
      answer: "long-term memory",
      explanation: "Long-term memory stores information over extended periods, such as the name of someone from a past event like fifth grade."
    },
    {
      number: 45,
      question: "The term “anterograde amnesia” refers to:",
      options: [
        "the loss of the ability to form new memories.",
        "the loss of the ability to recall old events.",
        "the loss of short-term memory.",
        "the loss of all memory ability."
      ],
      answer: "the loss of the ability to form new memories.",
      explanation: "Anterograde amnesia involves difficulty in forming new long-term memories after the onset of amnesia, while old memories remain intact."
    },
    {
      number: 46,
      question: "The term “retrograde amnesia” refers to:",
      options: [
        "the loss of the ability to form new memories.",
        "the loss of the ability to recall old events.",
        "the loss of short-term memory.",
        "the loss of sensory memory."
      ],
      answer: "the loss of the ability to recall old events.",
      explanation: "Retrograde amnesia involves the inability to recall previously formed memories, typically from the period before the onset of amnesia."
    },
    {
      number: 47,
      question: "When we cannot retrieve information from memory, we say that _____ has occurred.",
      options: ["forgetting", "a memory trace", "sensory decay", "encoding failure"],
      answer: "forgetting",
      explanation: "Forgetting occurs when we are unable to retrieve information from memory, often due to factors like interference or decay."
    },
    {
      number: 48,
      question: "The results of the Brown–Peterson short-term memory task can be explained by:",
      options: ["decay", "interference", "both decay and interference", "neither decay nor interference"],
      answer: "both decay and interference",
      explanation: "The Brown-Peterson task demonstrates how short-term memory can be affected by both the decay of information over time and interference from other information."
    },
    {
      number: 49,
      question: "The calling to mind of previously stored information is known as",
      options: ["retrieval", "encoding", "storage", "forgetting"],
      answer: "retrieval",
      explanation: "Retrieval is the process of accessing and bringing to mind information that was previously stored in memory."
    },
    {
      number: 50,
      question: "You have just listened to a list of 20 words. When asked to recall these words in any order, you are LEAST LIKELY to recall the",
      options: ["first word", "second word", "10th word", "20th word"],
      answer: "10th word",
      explanation: "The serial position effect suggests you're more likely to recall words from the beginning (primacy effect) and the end (recency effect) of a list, but less likely to recall words from the middle, like the 10th word."
    },
    {
      number: 51,
      question: "According to the notion of cognitive economy, a characteristic like “has wings” would be stored along with which of the following semantic memory nodes?",
      options: ["bird", "ostrich", "robin", "all of these"],
      answer: "bird",
      explanation: "According to the notion of cognitive economy, the characteristic 'has wings' would be stored along with the semantic memory node 'bird.'"
    },
    {
      number: 52,
      question: "Contrary to the predictions of hierarchical models, Rips, Shoben, and Smith have found that people can verify the statement “A pig is an animal”:",
      options: [
        "faster than “A pig is a mammal.”",
        "faster than “A dog is an animal.”",
        "faster than “A pig is actually very clean.”",
        "faster than “A pig is a bird.”"
      ],
      answer: "faster than “A pig is a mammal.”",
      explanation: "Contrary to hierarchical models, Rips, Shoben, and Smith found that people verify “A pig is an animal” faster than “A pig is a mammal” because 'animal' is a more frequently associated and directly accessible category than the intermediate 'mammal' in semantic memory."
    },
    {
      number: 53,
      question: "According to research by Collins and Quillian, the statement “Siamese cats have blue eyes” will be verified:",
      options: [
        "slower than “Siamese cats give birth to live young.”",
        "faster than “Siamese cats give birth to live young.”",
        "in the same amount of time as “Siamese cats give birth to live young.”",
        "slower than “Siamese cats have tails.”"
      ],
      answer: "faster than “Siamese cats give birth to live young.”",
      explanation: "According to Collins and Quillian's model, specific traits (like blue eyes) are stored at the level of 'Siamese cats', while general traits (like giving birth) are stored at a higher level (e.g., 'mammals'), making the former faster to retrieve."
    },
    {
      number: 54,
      question: "Collins and Loftus’s spreading activation theory differs from the hierarchical network theory in that:",
      options: [
        "it dispenses with the idea of cognitive economy.",
        "it relies on the assumption of hierarchical structure.",
        "it cannot account for the typicality effect.",
        "it makes stronger predictions than hierarchical models."
      ],
      answer: "it dispenses with the idea of cognitive economy.",
      explanation: "Collins and Loftus’s spreading activation theory allows properties to be stored redundantly across multiple nodes rather than only at the highest level, offering more flexible retrieval."
    },
    {
      number: 55,
      question: "ACT models distinguish among three types of memory systems:",
      options: [
        "working memory, episodic memory, and declarative memory",
        "semantic memory, episodic memory, and procedural memory",
        "procedural memory, declarative memory, and semantic memory",
        "working memory, declarative memory, and procedural memory"
      ],
      answer: "working memory, declarative memory, and procedural memory",
      explanation: "ACT models distinguish working memory (temporary storage), declarative memory (facts/events), and procedural memory (skills)."
    },
    {
      number: 56,
      question: "According to ACT models, _______ memory represents information in if–then production rules.",
      options: ["working", "procedural", "episodic", "semantic"],
      answer: "procedural",
      explanation: "Procedural memory in ACT models uses if–then rules to guide learned skills and actions."
    },
    {
      number: 57,
      question: "Which of the following would be a part of your declarative memory system?",
      options: [
        "being able to name a hybrid car",
        "knowing how to react to a red light",
        "knowing how to drive a car",
        "knowing how to ride a bicycle"
      ],
      answer: "being able to name a hybrid car",
      explanation: "Declarative memory involves factual knowledge like naming a hybrid car, while the others involve procedural memory."
    },
    {
      number: 58,
      question: "Which of the following is FALSE regarding a connectionist training “epoch”?",
      options: [
        "It begins by generating a random output.",
        "Connection weights are initially set at random levels.",
        "Generated output patterns are compared with target patterns.",
        "Back propagation occurs over many trials."
      ],
      answer: "It begins by generating a random output.",
      explanation: "In connectionist models, outputs are based on weights and activations, not random generation."
    },
    {
      number: 59,
      question: "Studies of semantic memory have shown that in a lexical decision task, people are faster at responding to the stimulus “bread” if it is paired with a stimulus such as:",
      options: ["rencle", "dog", "xqkrf", "butter"],
      answer: "butter",
      explanation: "Due to semantic priming, related words like 'bread' and 'butter' speed up responses in lexical decision tasks."
    },
    {
      number: 60,
      question: "Which of the following would be a part of your procedural memory system?",
      options: [
        "knowing that the Baseball Hall of Fame is in Cooperstown, New York",
        "knowing the lifetime batting average of Ted Williams",
        "knowing how to swing a baseball bat",
        "being able to remember the ball and strike count of the current pitch"
      ],
      answer: "knowing how to swing a baseball bat",
      explanation: "Procedural memory involves motor skills and actions, like swinging a bat, rather than recalling facts."
    },
    {
      number: 61,
      question: "A ________ is a mental representation of some object, event, or pattern.",
      options: ["category", "concept", "script", "memory"],
      answer: "concept",
      explanation: "A concept is a mental representation of an object, event, or pattern that helps in categorizing and understanding information based on shared characteristics."
    },
    {
      number: 62,
      question: "“Characteristic features” and “family resemblance” are important aspects of the _________ view of concepts.",
      options: ["classical", "prototype", "exemplar", "schema"],
      answer: "prototype",
      explanation: "The prototype view emphasizes characteristic features and family resemblance, suggesting that category membership is determined by similarity to a central or most typical example."
    },
    {
      number: 63,
      question: "If “soda” is a basic-level category, then ______ would be a subordinate level.",
      options: ["soft drink", "beverage", "drink", "Coca-Cola"],
      answer: "Coca-Cola",
      explanation: "Coca-Cola is a subordinate-level category under the basic-level category 'soda', representing a specific instance."
    },
    {
      number: 64,
      question: "According to the ______ view of concepts, people categorize new instances by comparing them to representations of previously stored instances.",
      options: ["classical", "prototype", "exemplar", "schema"],
      answer: "exemplar",
      explanation: "The exemplar view holds that categorization occurs by comparing new instances to stored specific examples."
    },
    {
      number: 65,
      question: "The _____ view of concepts argues that concepts include representations of at least some individual instances and not only abstract summaries.",
      options: ["classical", "prototype", "schemata", "both exemplar and schemata"],
      answer: "both exemplar and schemata",
      explanation: "Both views suggest that concepts include specific examples and generalized knowledge or frameworks."
    },
    {
      number: 66,
      question: "Which of the following is true regarding schemata?",
      options: [
        "A schema refers to something smaller and more specific than a concept.",
        "Schemata are passive rather than active.",
        "A schema contains only fixed parts, never variables.",
        "Schemata can indicate relationships among various pieces of information."
      ],
      answer: "Schemata can indicate relationships among various pieces of information.",
      explanation: "Schemata represent active, structured frameworks that relate different pieces of information."
    },
    {
      number: 67,
      question: "The ______ view of concepts argues that a person uses his/her theories about the way the world works to justify the classification of instances in the same category.",
      options: ["prototype", "exemplar", "schema", "knowledge-based"],
      answer: "knowledge-based",
      explanation: "This view emphasizes the use of background knowledge and reasoning in categorization, rather than just feature similarity."
    },
    {
      number: 68,
      question: "The schema view of concept formation assumes that:",
      options: [
        "there are clear boundaries among individual schemata.",
        "there is cognitive economy among concepts.",
        "information is abstracted across instances.",
        "no information is stored about actual instances."
      ],
      answer: "information is abstracted across instances.",
      explanation: "The schema view generalizes information from multiple experiences into a structured mental framework."
    },
    {
      number: 69,
      question: "Which of the following is a good example of a basic level of categorization?",
      options: ["musical instrument", "piano", "electronic keyboard", "grand piano"],
      answer: "piano",
      explanation: "'Piano' represents a basic level — more informative than 'musical instrument' and less specific than 'grand piano'."
    },
    {
      number: 70,
      question: "If “sandwich” is a basic-level category, then ______ would be a superordinate level.",
      options: ["soup", "sub", "panini", "food"],
      answer: "food",
      explanation: "'Food' is a superordinate category of 'sandwich', representing a broader group that includes various types of meals."
    },
    {
      number: 71,
      question: "Several mnemonic devices, including the method of loci, the pegword method, and the method of interacting images, have in common their reliance on:",
      options: ["verbal rehearsal", "creating a story", "visual imagery", "connecting new information to well-known information"],
      answer: "visual imagery",
      explanation: "These mnemonic strategies enhance memory through the creation of vivid mental images tied to information to be remembered."
    },
    {
      number: 72,
      question: "According to the dual-coding hypothesis, which of the following word pairs would be easiest to remember?",
      options: ["fire-inspiration", "ferret-catalog", "freedom-honesty", "cat-liberty"],
      answer: "ferret-catalog",
      explanation: "Concrete word pairs like 'ferret-catalog' are easier to remember because they can be encoded both verbally and visually."
    },
    {
      number: 73,
      question: "In Paivio’s study of paired-associate learning, which sequence represents recall performance from highest to lowest?",
      options: [
        "I, III, II, IV",
        "I, II, III, IV",
        "II, III, I, IV",
        "IV, III, II, I"
      ],
      answer: "I, II, III, IV",
      explanation: "Concrete-concrete pairs were recalled best, followed by mixed pairs and then abstract-abstract pairs, due to availability of visual imagery."
    },
    {
      number: 74,
      question: "The relational-organizational hypothesis is supported by:",
      options: [
        "the effectiveness of the method of loci",
        "the fact that concrete words are recalled better than abstract words",
        "the fact that noninteractive images do not facilitate recall whereas interactive images do facilitate recall",
        "the effectiveness of the pegword method"
      ],
      answer: "the fact that noninteractive images do not facilitate recall whereas interactive images do facilitate recall",
      explanation: "This supports the idea that meaningful relations (interaction) among items aid memory more than isolated items."
    },
    {
      number: 75,
      question: "Some theorists believe that there is a single code for all types of information; this code is known as a _______ representation.",
      options: ["visual", "pictorial", "verbal", "propositional"],
      answer: "propositional",
      explanation: "A propositional representation stores all knowledge in an abstract, language-like code, rather than separate verbal and visual formats."
    },
    {
      number: 76,
      question: "Behaviorists objected to the study of visual imagery because:",
      options: [
        "it cannot be investigated with sufficient scientific control.",
        "there are too many individual differences in people’s abilities to visualize.",
        "behaviorists prefer to study animals and animals have no imagery abilities.",
        "we can only study visual imagery and not auditory images, olfactory images, etc."
      ],
      answer: "it cannot be investigated with sufficient scientific control.",
      explanation: "Behaviorists preferred observable behaviors over introspective methods like visual imagery, which they viewed as unmeasurable."
    },
    {
      number: 77,
      question: "Kosslyn found that people were ______ when verifying 'heads' with imagery and 'claws' without imagery.",
      options: [
        "faster at verifying 'claws' whether or not they used visual imagery.",
        "faster at verifying 'heads' whether or not they used visual imagery.",
        "faster at verifying 'heads' when they used imagery, 'claws' when they did not.",
        "faster at verifying 'claws' when they used imagery, 'heads' when they did not."
      ],
      answer: "faster at verifying 'heads' when they used imagery, 'claws' when they did not.",
      explanation: "Mental imagery helps in processing prominent features like 'heads', while semantic association aids with frequent features like 'claws'."
    },
    {
      number: 78,
      question: "Finke’s principle of _____ states that mental imagery allows us to retrieve information that was not intentionally stored.",
      options: ["perceptual equivalence", "transformational equivalence", "implicit encoding", "structural encoding"],
      answer: "implicit encoding",
      explanation: "Implicit encoding allows access to details through imagery that were not deliberately encoded at the time of perception."
    },
    {
      number: 79,
      question: "Your mental map of your campus is probably:",
      options: [
        "larger than reality.",
        "smaller than reality.",
        "more regular, with more straight lines and right angles, than reality.",
        "less regular, with fewer straight lines and right angles, than reality."
      ],
      answer: "more regular, with more straight lines and right angles, than reality.",
      explanation: "Mental maps tend to simplify and regularize spatial layouts, making them appear more structured than they actually are."
    },
    {
      number: 80,
      question: "Cooper’s studies of the mental rotation of complex polygons indicated that:",
      options: [
        "people rotated more complex polygons in the same amount of time as simpler polygons.",
        "people took longer to rotate more complex polygons.",
        "people actually took less time to rotate more complex polygons.",
        "people were unable to mentally rotate a polygon with greater than 10 points with more than chance accuracy."
      ],
      answer: "people rotated more complex polygons in the same amount of time as simpler polygons.",
      explanation: "Mental rotation appears to be a holistic process not significantly affected by the complexity of the shapes being rotated."
    },
    {
      number: 81,
      question: "Which of the following is/are generally agreed upon as necessary criteria/criterion for claiming that a communication system is a language?",
      options: ["regularity", "productivity", "referentiality", "both regularity and productivity"],
      answer: "both regularity and productivity",
      explanation: "Regularity refers to the structured and rule-governed nature of language, and productivity means language can generate an infinite number of novel sentences from a finite set of words and rules."
    },
    {
      number: 82,
      question: "Bird songs and bee dances are not considered to be languages because:",
      options: ["they do not use words", "they do not have a formal grammar", "they cannot express infinite combinations of ideas", "they do not have a permanent (written) form"],
      answer: "they cannot express infinite combinations of ideas",
      explanation: "Bird songs and bee dances are limited to a fixed set of messages, unlike human language, which is productive and capable of expressing an infinite variety of ideas."
    },
    {
      number: 83,
      question: "The smallest unit of language that carries a consistent meaning is called a:",
      options: ["feature", "phoneme", "phonetic", "morpheme"],
      answer: "morpheme",
      explanation: "A morpheme is the smallest meaningful unit of language, which can be a word or a part of a word that carries meaning."
    },
    {
      number: 84,
      question: "English speakers hear a distinction between 'l' and 'r' sounds; speakers of some Chinese dialects do not hear this distinction. This example illustrates a difference in the ______ aspects of the two languages.",
      options: ["phonetic", "phonological", "semantic", "syntactic"],
      answer: "phonetic",
      explanation: "Phonetic aspects of language refer to the physical sounds of speech. The distinction between 'l' and 'r' is a phonetic difference."
    },
    {
      number: 85,
      question: "Studies of sentence comprehension have shown all of the following EXCEPT:",
      options: [
        "Exact wording of a clause is preserved in memory while that clause is actively being processed.",
        "After a sentence has been processed, exact wording is discarded and only the general meaning is preserved in memory.",
        "We typically do not consciously notice ambiguities in sentences.",
        "We do not process exact wording in memory; we only process meaning."
      ],
      answer: "We do not process exact wording in memory; we only process meaning.",
      explanation: "Research indicates that while exact wording is preserved during active processing, it is discarded once the sentence is understood, and only the general meaning is stored."
    },
    {
      number: 86,
      question: `What's for dinner? "Food." The second speaker is breaking Grice’s maxim of: `,
      options: ["quantity", "quality", "relation", "manner"],
      answer: "quantity",
      explanation: "Grice's Maxim of Quantity states that speakers should provide an adequate amount of information. The second speaker's response is too brief, violating this maxim."
    },
    {
      number: 87,
      question: "Fodor’s modularity hypothesis proposes that:",
      options: [
        "language processing actually encompasses several subskills (modules).",
        "in understanding language, we separate sentences and phrases into individual units known as modules.",
        "thought processes are dependent upon the language we use to think.",
        "certain language processes operate independently of other cognitive processes such as memory and attention."
      ],
      answer: "certain language processes operate independently of other cognitive processes such as memory and attention.",
      explanation: "Fodor's Modularity Hypothesis suggests that certain cognitive functions, such as language processing, operate through independent modules without being influenced by other cognitive functions."
    },
    {
      number: 88,
      question: "Whorf’s linguistic relativity hypothesis:",
      options: [
        "asserts that thought is dependent upon language.",
        "is supported by studies of color perception.",
        "asserts that thought is dependent upon language, and is supported by studies of color perception.",
        "asserts that thought is dependent upon language, and is not supported by studies of color perception."
      ],
      answer: "asserts that thought is dependent upon language, and is not supported by studies of color perception.",
      explanation: "Whorf's hypothesis suggests that language shapes thought. However, studies on color perception show that people from different linguistic backgrounds perceive colors similarly, which challenges the hypothesis."
    },
    {
      number: 89,
      question: "Damage to Broca’s area often leads to:",
      options: ["expressive aphasia", "receptive aphasia", "inability to comprehend written language", "both expressive aphasia and inability to comprehend written language"],
      answer: "expressive aphasia",
      explanation: "Damage to Broca’s area typically results in expressive aphasia, characterized by difficulty in producing speech, while comprehension remains mostly intact."
    },
    {
      number: 90,
      question: "The word 'bat' is considered to be lexically ambiguous because it has two possible meanings.",
      options: ["True", "False"],
      answer: "True",
      explanation: "The word 'bat' is lexically ambiguous because it has two meanings: a flying mammal and a piece of sports equipment."
    },
    {
      number: 91,
      question: "A(n) _______ problem has a clear goal, a small set of starting information, and rules about how to attain the goal.",
      options: ["classic", "laboratory", "well-defined", "introspective"],
      answer: "well-defined",
      explanation: "A well-defined problem has a clear goal, a small set of starting information, and rules about how to reach the goal, making it easier to solve."
    },
    {
      number: 92,
      question: "The problem-solving technique of ______ involves comparing the goal with the starting point, thinking of possible ways to overcome the distance between them, and choosing the best one.",
      options: ["generate-and-test", "means-end analysis", "reasoning by analogy", "mental set"],
      answer: "means-end analysis",
      explanation: "Means-end analysis involves breaking down a problem into smaller subproblems, solving each of them to reduce the difference between the current state and the goal state."
    },
    {
      number: 93,
      question: "The General Problem Solver (GPS) is a computer program that solves problems in crypt arithmetic and logic using:",
      options: ["means-end analysis", "generate-and-test", "reasoning by analogy", "introspection"],
      answer: "means-end analysis",
      explanation: "The General Problem Solver (GPS) uses means-end analysis to solve problems by breaking down complex problems into smaller, manageable subproblems."
    },
    {
      number: 94,
      question: "______ is a very important technique for solving the Towers of Hanoi problem.",
      options: ["Means-end analysis", "Generate-and-test", "Working backward", "Reasoning by analogy"],
      answer: "Working backward",
      explanation: "Working backward involves starting from the goal state and moving backward to the initial state, which is a common technique for solving problems like the Towers of Hanoi."
    },
    {
      number: 95,
      question: "A tendency to adopt a certain framework, strategy, or procedure, which can become an obstacle to successful problem solving, is called:",
      options: ["mental set", "functional fixedness", "well-defined thinking", "ill-defined thinking"],
      answer: "mental set",
      explanation: "A mental set refers to the tendency to approach problems in a certain way based on past experiences, which can limit creativity and problem-solving abilities."
    },
    {
      number: 96,
      question: "The string problem often generates ______ when participants do not think to use the screwdriver as a pendulum.",
      options: ["functional fixedness", "mental set", "incomplete representations", "reasoning by analogy"],
      answer: "functional fixedness",
      explanation: "Functional fixedness occurs when people are unable to use objects in new or novel ways, such as not thinking of using a screwdriver as a pendulum in the string problem."
    },
    {
      number: 97,
      question: "________ involves appropriate novelty in generating solutions.",
      options: ["Intelligence", "Genius", "Creativity", "Mental disorder"],
      answer: "Creativity",
      explanation: "Creativity involves generating novel and appropriate solutions to problems, showing originality and the ability to think outside the box."
    },
    {
      number: 98,
      question: "Research on the incubation effect has shown that:",
      options: [
        "most empirical studies support the positive effects of incubation.",
        "incubation effects are only found with very long incubation intervals.",
        "incubation actually has a negative effect on performance.",
        "participants who take physical and mental breaks rarely show increased ability to solve problems."
      ],
      answer: "participants who take physical and mental breaks rarely show increased ability to solve problems.",
      explanation: "Research on the incubation effect shows mixed results, with some studies indicating that taking breaks doesn't always improve problem-solving performance."
    },
    {
      number: 99,
      question: "The prefrontal cortex is involved in the ability to plan and solve problems.",
      options: ["True", "False"],
      answer: "True",
      explanation: "The prefrontal cortex plays a key role in higher-order cognitive functions, including planning, decision-making, and problem-solving."
    },
    {
      number: 100,
      question: "The detailed, concurrent, and nonjudgmental observation of the contents of your consciousness is called:",
      options: ["thinking", "daydreaming", "problem solving", "introspection"],
      answer: "introspection",
      explanation: "Introspection involves examining one's own mental processes and is the careful observation of thoughts, feelings, and perceptions without judgment."
    },
    {
      number: 101,
      question: "Deductive reasoning involves which of the following?",
      options: [
        "going from general to specific statements",
        "conclusions that add new information to what is given",
        "going from specific to general statements",
        "going from specific to specific statements"
      ],
      answer: "going from general to specific statements",
      explanation: "Deductive reasoning involves starting from general premises and applying them to specific cases to draw conclusions."
    },
    {
      number: 102,
      question: "When it is improbable (but not impossible) for an argument’s premises to be true and its conclusions false, the argument has:",
      options: [
        "deductive validity",
        "deductive strength",
        "inductive validity",
        "inductive strength"
      ],
      answer: "inductive strength",
      explanation: "Inductive strength refers to the degree of probability that an argument's conclusion is true given that the premises are true, but without guaranteeing it."
    },
    {
      number: 103,
      question: "If a person has five letters in his or her name, then s/he is a Glirple. I can now validly assume that:",
      options: [
        "Shawn is a Glirple.",
        "anyone who is a Glirple must have five letters in his/her name.",
        "anyone who is not a Glirple cannot be named Susan.",
        "Shawn is a Glirple, and anyone who is not a Glirple cannot be named Susan."
      ],
      answer: "Shawn is a Glirple, and anyone who is not a Glirple cannot be named Susan.",
      explanation: "From the premise, anyone with five letters in their name is a Glirple. Since Shawn's name fits the criterion, Shawn must be a Glirple."
    },
    {
      number: 104,
      question: "In completing Wason’s four-card task, participants usually:",
      options: [
        "turn over the two cards that are necessary and sufficient to test the rule.",
        "turn over all four cards, when only two would have been sufficient.",
        "turn over all four cards, when only one would have been sufficient.",
        "show understanding of modus ponens but neglect modus tollens."
      ],
      answer: "show understanding of modus ponens but neglect modus tollens.",
      explanation: "Participants typically focus on the rule that affirms a condition (modus ponens) and neglect the rule that denies a condition (modus tollens), which leads them to turn over more cards than necessary."
    },
    {
      number: 105,
      question: "People have more difficulty working with:",
      options: [
        "quantifiers such as “all” or “no.”",
        "quantifiers such as “some.”",
        "premises that have negatives in them, and quantifiers such as “all” or “no.”",
        "premises that have negatives in them, and quantifiers such as “some.”"
      ],
      answer: "premises that have negatives in them, and quantifiers such as “some.”",
      explanation: "The complexity of reasoning increases when premises include negations and the quantifiers ‘some’, which are less intuitive for people to process."
    },
    {
      number: 106,
      question: "The tendency to seek out information that supports our current beliefs is called:",
      options: [
        "a believability effect",
        "a content effect",
        "a confirmation bias",
        "syllogistic reasoning"
      ],
      answer: "a confirmation bias",
      explanation: "Confirmation bias is the tendency to favor information that confirms one's preexisting beliefs, often disregarding contradictory evidence."
    },
    {
      number: 107,
      question: "The gambler’s fallacy is thought of as a special instance of:",
      options: [
        "framing",
        "availability",
        "belief in the law of small numbers",
        "hindsight"
      ],
      answer: "belief in the law of small numbers",
      explanation: "The gambler’s fallacy arises from the belief that small samples should reflect the probabilities of the larger population, which leads to incorrect predictions based on past outcomes."
    },
    {
      number: 108,
      question: "Let p = “Mary got an A on her exam” and q = “John got a C on his exam.” In which of the following situations is the statement “p & q” true?",
      options: [
        "Mary and John both got A’s.",
        "Mary and John both got C’s.",
        "Mary got an A and John got a C.",
        "Mary got a C and John got an A."
      ],
      answer: "Mary got an A and John got a C.",
      explanation: "The statement 'p & q' is true when both p (Mary got an A) and q (John got a C) are true."
    },
    {
      number: 109,
      question: "“All dogs chase cats. Bingo is a dog. Therefore, Bingo chases cats.” This is an example of deductive reasoning.",
      options: ["True", "False"],
      answer: "True",
      explanation: "This is an example of deductive reasoning, where a conclusion is drawn from general premises that are assumed to be true."
    },
    {
      number: 110,
      question: "The representativeness heuristic causes us to erroneously judge words with “L” as their first letter to be more common than words with “L” as their third letter.",
      options: ["True", "False"],
      answer: "False",
      explanation: "The representativeness heuristic often causes people to judge the likelihood of an event based on how similar it is to a typical case, but the frequency of letters doesn’t follow this bias. Words with 'L' as the third letter are actually more common."
    },
    {
      number: 111,
      question: "_____ is a normative model for integrating different dimensions and goals of a complex decision.",
      options: [
        "Expected utility",
        "MAUT",
        "Framing",
        "Availability"
      ],
      answer: "MAUT",
      explanation: "MAUT (Multiattribute Utility Theory) is a normative model that helps integrate different dimensions and goals of a complex decision by evaluating the utility of each alternative."
    },
    {
      number: 112,
      question: "Expert decision makers may rely on intuition and mental simulation, according to the _________ model.",
      options: [
        "recognition-primed decision-making",
        "MAUT",
        "EU",
        "elimination-by-aspects"
      ],
      answer: "recognition-primed decision-making",
      explanation: "The recognition-primed decision-making model suggests that experts often make decisions by intuitively recognizing patterns and simulating possible outcomes rather than explicitly analyzing all available information."
    },
    {
      number: 113,
      question: "Expected utility is a descriptive model of human decision making.",
      options: ["True", "False"],
      answer: "False",
      explanation: "Expected utility theory is a normative model, describing how people *should* make decisions to maximize utility, not necessarily how they *do* make decisions."
    },
    {
      number: 114,
      question: "When making a complex decision such as choosing 1 of 10 different apartments to rent,",
      options: [
        "participants spontaneously use multiattribute utility theory.",
        "participants use the same decision strategies regardless of the number of alternatives they are choosing between.",
        "participants systematically search for all available information.",
        "participants often eliminate some alternatives on the basis of only one or a few undesirable characteristics."
      ],
      answer: "participants often eliminate some alternatives on the basis of only one or a few undesirable characteristics.",
      explanation: "People often simplify complex decisions by eliminating alternatives that have a major undesirable feature, without considering all aspects of each choice."
    },
    {
      number: 115,
      question: "Expected utility theory is usually regarded as a ________ model of decision making.",
      options: [
        "descriptive",
        "prescriptive",
        "normative",
        "both descriptive and prescriptive"
      ],
      answer: "normative",
      explanation: "Expected utility theory is a normative model, suggesting how decisions should ideally be made to maximize utility."
    },
    {
      number: 116,
      question: "You are offered a chance to buy a lottery ticket. The probability of winning is 1 in 100. If you win, the prize is $100,000. According to expected value, a “fair” price for this lottery ticket would be:",
      options: [
        "$5",
        "$10",
        "$100",
        "$1000"
      ],
      answer: "$1000",
      explanation: "The expected value is calculated as: (1/100) * $100,000 = $1,000, which would be the fair price of the lottery ticket."
    },
    {
      number: 117,
      question: "Normative models of decision making describe:",
      options: [
        "ideal performance under ideal circumstances.",
        "what people actually do when they make decisions.",
        "cognitive illusions.",
        "hindsight biases."
      ],
      answer: "ideal performance under ideal circumstances.",
      explanation: "Normative models describe how decisions should be made to maximize outcomes, assuming ideal conditions and rationality."
    },
    {
      number: 118,
      question: "You are a participant in an experiment in which you answer a long list of general knowledge questions. After answering each question, you are asked to rate your probability of being correct. If you are like the typical participant in such experiments, you will probably be correct on what percentage of questions for which you estimated '60% probability correct'?",
      options: [
        "55%",
        "60%",
        "70%",
        "100%"
      ],
      answer: "55%",
      explanation: "The typical participant tends to overestimate their accuracy when assigning probabilities, so they are more likely to be correct around 55% of the time for questions they rated as 60% likely."
    },
    {
      number: 119,
      question: "The normative model for integrating different dimensions of a complex decision is called MAUT.",
      options: ["True", "False"],
      answer: "True",
      explanation: "MAUT (Multiattribute Utility Theory) is indeed a normative model for integrating various dimensions of complex decisions."
    },
    {
      number: 120,
      question: "You have just spent 10 minutes trying to figure out the answer to a single problem on your math quiz. In spite of your lack of success, you continue to struggle, neglecting to continue on to other problems because you’ve already invested so much time and effort in this problem. You have fallen victim to:",
      options: [
        "the sunk cost effect.",
        "a framing effect.",
        "the anchor effect.",
        "availability bias."
      ],
      answer: "the sunk cost effect.",
      explanation: "The sunk cost effect occurs when people continue an endeavor because of previously invested resources (time, effort, money), rather than cutting their losses."
    }
  ];
  
  const form = document.getElementById('quizForm');
  
  // console.log("Form element:", form, "Questions:", questions);
  
  // Dynamically create the quiz questions
  questions.forEach((q, index) => {
    const div = document.createElement('div');
    div.className = 'question';
    div.id = `q${index + 1}`;
    let html = `<p><strong>${q.number}. ${q.question}</strong></p>`;
  
    q.options.forEach((option, idx) => {
      html += `<label><input type="radio" name="q${index + 1}" value="${option}"> ${String.fromCharCode(65 + idx)}. ${option}</label>`;
    });
  
    div.innerHTML = html;
    form.appendChild(div);
  });
  
  function checkAnswers() {
    questions.forEach((q, index) => {
      const selected = document.querySelector(`input[name="q${index + 1}"]:checked`);
      const div = document.getElementById(`q${index + 1}`);
      const prevResult = div.querySelector(".result");
      if (prevResult) prevResult.remove(); // Remove previous result
  
      const result = document.createElement("div");
      result.className = "result";
  
      if (selected && selected.value === q.answer) {
        result.classList.add("correct");
        result.innerText = `✔ Correct \n ${q.explanation}`;
      } else {
        result.classList.add("wrong");
        result.innerText = `✘ Wrong. Correct answer: ${q.answer}. \n ${q.explanation}`;
      }
  
      div.appendChild(result);
    });
  }
  