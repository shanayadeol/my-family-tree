/* script.js - Integrated data structure and rendering logic for hierarchical family tree */

// 1. Core Family Data (using the list you provided)
const familyData = [
  // Generation 1 (Grandparents)
  { id: "rachpal_atwal", name: "Rachpal Atwal", birthYear: 1941, deathYear: 2015, info: "married in 1961" },
  { id: "nashatar_atwal", name: "Nashatar Atwal", birthYear: 1946, deathYear: "Present", info: "married in 1961" },

  // Generation 2 (The 6 initial siblings)
  { id: "kuldip_rai", name: "Kuldip Rai", birthYear: 1962, deathYear: "Present", info: "married in 1984" },
  { id: "jagdish_boparai", name: "Jagdish Boparai", birthYear: 1966, deathYear: "Present", info: "married in 1994" },
  { id: "balwinder_atwal", name: "Balwinder Atwal", birthYear: 1968, deathYear: "Present", info: "married in 1995" },
  { id: "rajwant_mahal", name: "Rajwant Mahal", birthYear: 1969, deathYear: "Present", info: "married in 1994" },
  { id: "rajinder_deol", name: "Rajinder Deol", birthYear: 1976, deathYear: "Present", info: "married in 1999" },
  { id: "gurinder_atwal", name: "Gurinder Atwal", birthYear: 1977, deathYear: "Present", info: "married in 2005" },

  // Spouses for Gen 2
  { id: "talbinder_rai", name: "Talbinder Rai", birthYear: 1961, deathYear: "Present", info: "married in 1984" },
  { id: "bhupinder_boparai", name: "Bhupinder Boparai", birthYear: 1966, deathYear: "Present", info: "married in 1994" },
  { id: "parminder_atwal", name: "Parminder Atwal", birthYear: 1970, deathYear: "Present", info: "married in 1995" },
  { id: "jagtar_mahal", name: "Jagtar Mahal", birthYear: 1966, deathYear: "Present", info: "married in 1994" },
  { id: "gurmukh_deol", name: "Gurmukh Deol", birthYear: 1976, deathYear: "Present", info: "married in 1999" },
  { id: "harjit_atwal", name: "Harjit Atwal", birthYear: 1985, deathYear: "Present", info: "married in 2005" },

  // Generation 3 & 4: Descendants
  // Aunt 1 Branch
  { id: "amandeep_rai", name: "Amandeep Rai", birthYear: 1985, deathYear: "Present" },
  { id: "gurdeep_rai", name: "Gurdeep Rai", birthYear: 1989, deathYear: "Present", info: "married in 2020" },
  { id: "sandeep_rai", name: "Sandeep Rai", birthYear: 1990, deathYear: "Present" },
  { id: "taldeep_rai", name: "Taldeep Rai", birthYear: 1993, deathYear: "Present", info: "married in 2021" },
  { id: "harby_rai", name: "Harby Rai", birthYear: 1990, deathYear: "Present", info: "married in 2020" },
  { id: "niam_rai", name: "Niam Rai", birthYear: 2022, deathYear: "Present" }, // Gen 4
  { id: "aneet_rai", name: "Aneet Rai", birthYear: 1992, deathYear: "Present", info: "married in 2021" },
  { id: "rowan_rai", name: "Rowan Rai", birthYear: 2024, deathYear: "Present" }, // Gen 4

  // Aunt 2 Branch
  { id: "harvey_boparai", name: "Harvey Boparai", birthYear: 1996, deathYear: "Present" },
  { id: "jasjit_boparai", name: "Jasjit Boparai", birthYear: 1998, deathYear: "Present" },

  // Uncle 1 Branch
  { id: "simranpreet_atwal", name: "Simranpreet Atwal", birthYear: 1996, deathYear: "Present" },
  { id: "gurraman_atwal", name: "Gurraman Atwal", birthYear: 1997, deathYear: "Present" },
  { id: "gavin_atwal", name: "Gavin Atwal", birthYear: 2005, deathYear: "Present" },

  // Aunt 3 Branch
  { id: "taranvir_mahal", name: "Taranvir Mahal", birthYear: 1999, deathYear: "Present" },
  { id: "jaspreet_mahal", name: "Jaspreet Mahal", birthYear: 2000, deathYear: "Present" },

  // Aunt 4 Branch
  { id: "serena_deol", name: "Serena Deol", birthYear: 2003, deathYear: "Present" },
  { id: "shanaya_deol", name: "Shanaya Deol", birthYear: 2014, deathYear: "Present" },

  // Uncle 2 Branch
  { id: "gagan_atwal", name: "Gagan Atwal", birthYear: 2007, deathYear: "Present" },
  { id: "aashvir_atwal", name: "Aashvir Atwal", birthYear: 2009, deathYear: "Present" }
];

// 2. Definitive Tree Hierarchy Structure (Links IDs to roles)
const treeStructure = {
  // Key ID: rachpal_atwal (This sets the start node for everything)
  grandparents: ["rachpal_atwal", "nashatar_atwal"],
  
  // The six main branches arising from the grandparents
  branches: [
    { parent: "kuldip_rai", spouse: "talbinder_rai", children: [
        { id: "amandeep_rai" },
        { id: "gurdeep_rai", spouse: "harby_rai", children: ["niam_rai"] }, // Branch with Gen 4
        { id: "sandeep_rai" },
        { id: "taldeep_rai", spouse: "aneet_rai", children: ["rowan_rai"] }  // Branch with Gen 4
    ]},
    { parent: "jagdish_boparai", spouse: "bhupinder_boparai", children: ["harvey_boparai", "jasjit_boparai"] },
    { parent: "balwinder_atwal", spouse: "parminder_atwal", children: ["simranpreet_atwal", "gurraman_atwal", "gavin_atwal"] },
    { parent: "rajwant_mahal", spouse: "jagtar_mahal", children: ["taranvir_mahal", "jaspreet_mahal"] },
    { parent: "rajinder_deol", spouse: "gurmukh_deol", children: ["serena_deol", "shanaya_deol"] },
    { parent: "gurinder_atwal", spouse: "harjit_atwal", children: ["gagan_atwal", "aashvir_atwal"] }
  ]
};

// 3. Main Rendering Logic
document.addEventListener("DOMContentLoaded", () => {
  const treeContainer = document.getElementById("tree-container");
  const modal = document.getElementById("details-modal");
  const closeBtn = document.getElementById("close-btn");

  if (!treeContainer) return;

  const dataMap = new Map(familyData.map(m => [m.id, m]));

  // --- Step A: Render Gen 1 (Grandparents) ---
  const gen1Group = createDOMGroup("grandparents-container");
  treeStructure.grandparents.forEach(id => {
    const member = dataMap.get(id);
    if (member) {
      const card = createMemberCard(member);
      card.classList.add('member-card-gen1');
      gen1Group.appendChild(card);
    }
  });
  treeContainer.appendChild(gen1Group);

  // --- Connection: Gen 1 -> Gen 2 ---
  treeContainer.appendChild(createVerticalLine('gen1'));
  // Special wide horizontal line connecting all 6 main sibling cards
  treeContainer.appendChild(createHorizontalLine('gen-1-child-line'));

  // --- Step B: Render the 6 main branches (Gen 2-4) ---
  const gen2BranchesContainer = createDOMGroup("gen-2-branches");
  
  treeStructure.branches.forEach(branch => {
    // Container for one individual's family column (Parent, Children, Grandchildren)
    const branchColumn = createDOMGroup("family-branch");

    // Add vertical stub above each Gen 2 sibling to meet wide horizontal line
    branchColumn.appendChild(createStubLine());

    // 1. Create Sibling+Spouse pair for this branch
    branchColumn.appendChild(createCouplePair(dataMap, branch.parent, branch.spouse));

    // 2. If this sibling has children (Gen 3), render them below
    if (branch.children && branch.children.length > 0) {
      // Branch-specific connection logic (Vertical Line + Horizontal connector)
      renderBranchConnections(branchColumn, branch.children.length);

      // Recursive call to create the next generation container
      branchColumn.appendChild(createChildrenRecursive(dataMap, branch.children));
    } else {
        branchColumn.classList.add('leaf-container'); // Centers children without descendants
    }

    gen2BranchesContainer.appendChild(branchColumn);
  });
  treeContainer.appendChild(gen2BranchesContainer);

  // --- Modal Click Handling ---
  treeContainer.addEventListener("click", e => {
    const card = e.target.closest(".member-card");
    if (card) {
      const id = card.dataset.memberId;
      const member = dataMap.get(id);
      if (member) showModal(modal, member);
    }
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
  }
});

// --- Recursive Function for Gen 3 & 4 ---
function createChildrenRecursive(dataMap, childrenList) {
  const container = createDOMGroup("gen-container");

  childrenList.forEach(child => {
    if (typeof child === 'string') {
        // Simple case: No descendants (leaf node)
        const member = dataMap.get(child);
        if (member) container.appendChild(createMemberCard(member));
    } else if (typeof child === 'object' && child.id) {
        // Complex case: This child has descendants (Gen 4)
        const complexBranchColumn = createDOMGroup("family-branch");
        
        complexBranchColumn.appendChild(createStubLine());
        
        // Render Sibling+Spouse
        complexBranchColumn.appendChild(createCouplePair(dataMap, child.id, child.spouse));

        // Connections for Gen 4
        renderBranchConnections(complexBranchColumn, child.children.length);

        // Recursive call (Gen 4 nodes)
        complexBranchColumn.appendChild(createChildrenRecursive(dataMap, child.children));
        
        container.appendChild(complexBranchColumn);
    }
  });
  return container;
}

// --- DOM Utility Helpers (The machinery that builds the structure) ---

function createDOMGroup(className) {
  const div = document.createElement("div");
  div.className = className;
  return div;
}

function createMemberCard(member) {
  const card = document.createElement("div");
  card.className = "member-card";
  card.dataset.memberId = member.id;
  card.innerHTML = `<h3>${member.name}</h3><p>${member.birthYear} - ${member.deathYear}</p>`;
  return card;
}

function createCouplePair(dataMap, parentId, spouseId) {
    const container = createDOMGroup('couple-container grandparents-container'); // Reuses styling for couples
    
    const parent = dataMap.get(parentId);
    if(parent) container.appendChild(createMemberCard(parent));
    
    if(spouseId) {
        const spouse = dataMap.get(spouseId);
        if(spouse) container.appendChild(createMemberCard(spouse));
    }
    return container;
}

function renderBranchConnections(branchColumn, childrenCount) {
    // Line dropping from the center of the couple
    branchColumn.appendChild(createVerticalLine('parent'));
    // Main horizontal connector if more than 1 child, wide connector if recursive children exist
    if (childrenCount > 0) branchColumn.appendChild(createHorizontalLine(null, childrenCount === 1));
}

// Vertical connection lines
function createVerticalLine(type) {
  const line = document.createElement("div");
  line.className = "connection-line line-vertical";
  if (type === 'gen1') line.classList.add('line-vertical-gen1'); // Special longer top line
  return line;
}

// Horizontal connection lines
function createHorizontalLine(id, isLeafNodePair) {
    const line = document.createElement("div");
    line.className = "line-horizontal";
    if(id) line.id = id;
    if(isLeafNodePair) line.style.borderTop = 'none'; // Edge case: no lines connecting only children to themselves
    return line;
}

// Top stub lines that rise to meet the horizontal connectors
function createStubLine() {
    const line = document.createElement('div');
    line.className = 'line-child-stub connection-line';
    return line;
}

// Populating the modal data
function showModal(modal, member) {
  const modalName = document.getElementById("modal-name");
  const modalDates = document.getElementById("modal-dates");
  const modalBio = document.getElementById("modal-bio");

  modalName.textContent = member.name;
  modalDates.textContent = `${member.birthYear} - ${member.deathYear}`;

  // Build the content for the biography area
  let bioHTML = `<p>${member.info || ""}</p>`;
  
  // Find related info in the main hierarchy
  const branchData = treeStructure.branches.find(b => b.parent === member.id);
  const complexChildData = treeStructure.branches.flatMap(b => b.children).find(c => c && c.id === member.id);
  
  if (branchData) {
      if (branchData.spouse) bioHTML += `<p><strong>Spouse:</strong> ${dataMap.get(branchData.spouse).name}</p>`;
      if (branchData.children.length > 0) bioHTML += `<p><strong>Children count:</strong> ${branchData.children.length}</p>`;
  } else if (complexChildData) {
       if (complexChildData.spouse) bioHTML += `<p><strong>Spouse:</strong> ${dataMap.get(complexChildData.spouse).name}</p>`;
       if (complexChildData.children.length > 0) bioHTML += `<p><strong>Children count:</strong> ${complexChildData.children.length}</p>`;
  } else {
    // Fallback if they are a Gen 1 member
    if(member.id === 'rachpal_atwal' || member.id === 'nashatar_atwal') {
        const gen1branchData = treeStructure.grandparents.find(id => id === member.id);
        if(gen1branchData) {
            bioHTML += `<p><strong>Spouse:</strong> ${dataMap.get(gen1branchData === 'rachpal_atwal' ? 'nashatar_atwal' : 'rachpal_atwal').name}</p>`;
            bioHTML += `<p><strong>Children count:</strong> ${treeStructure.branches.length}</p>`;
        }
    }
  }

  modalBio.innerHTML = bioHTML;
  modal.classList.remove("hidden");
}