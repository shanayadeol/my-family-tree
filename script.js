// 1. Family Data List
const familyData = [
  // Generation 1
  { id: "rachpal_atwal", name: "Rachpal Atwal", birthYear: 1941, deathYear: 2015, info: "Married in 1961" },
  { id: "nashatar_atwal", name: "Nashatar Atwal", birthYear: 1946, deathYear: "Present", info: "Married in 1961" },

  // Generation 2 & Spouses
  { id: "kuldip_rai", name: "Kuldip Rai", birthYear: 1962, deathYear: "Present", info: "Married in 1984" },
  { id: "talbinder_rai", name: "Talbinder Rai", birthYear: 1961, deathYear: "Present", info: "Married in 1984" },
  { id: "jagdish_boparai", name: "Jagdish Boparai", birthYear: 1966, deathYear: "Present", info: "Married in 1994" },
  { id: "bhupinder_boparai", name: "Bhupinder Boparai", birthYear: 1966, deathYear: "Present", info: "Married in 1994" },
  { id: "balwinder_atwal", name: "Balwinder Atwal", birthYear: 1968, deathYear: "Present", info: "Married in 1995" },
  { id: "parminder_atwal", name: "Parminder Atwal", birthYear: 1970, deathYear: "Present", info: "Married in 1995" },
  { id: "rajwant_mahal", name: "Rajwant Mahal", birthYear: 1969, deathYear: "Present", info: "Married in 1994" },
  { id: "jagtar_mahal", name: "Jagtar Mahal", birthYear: 1966, deathYear: "Present", info: "Married in 1994" },
  { id: "rajinder_deol", name: "Rajinder Deol", birthYear: 1976, deathYear: "Present", info: "Married in 1999" },
  { id: "gurmukh_deol", name: "Gurmukh Deol", birthYear: 1976, deathYear: "Present", info: "Married in 1999" },
  { id: "gurinder_atwal", name: "Gurinder Atwal", birthYear: 1977, deathYear: "Present", info: "Married in 2005" },
  { id: "harjit_atwal", name: "Harjit Atwal", birthYear: 1985, deathYear: "Present", info: "Married in 2005" },

  // Generation 3 & 4
  { id: "amandeep_rai", name: "Amandeep Rai", birthYear: 1985, deathYear: "Present" },
  { id: "gurdeep_rai", name: "Gurdeep Rai", birthYear: 1989, deathYear: "Present", info: "Married in 2020" },
  { id: "harby_rai", name: "Harby Rai", birthYear: 1990, deathYear: "Present", info: "Married in 2020" },
  { id: "niam_rai", name: "Niam Rai", birthYear: 2022, deathYear: "Present" },
  { id: "sandeep_rai", name: "Sandeep Rai", birthYear: 1990, deathYear: "Present" },
  { id: "taldeep_rai", name: "Taldeep Rai", birthYear: 1993, deathYear: "Present", info: "Married in 2021" },
  { id: "aneet_rai", name: "Aneet Rai", birthYear: 1992, deathYear: "Present", info: "Married in 2021" },
  { id: "rowan_rai", name: "Rowan Rai", birthYear: 2024, deathYear: "Present" },
  { id: "harvey_boparai", name: "Harvey Boparai", birthYear: 1996, deathYear: "Present" },
  { id: "jasjit_boparai", name: "Jasjit Boparai", birthYear: 1998, deathYear: "Present" },
  { id: "simranpreet_atwal", name: "Simranpreet Atwal", birthYear: 1996, deathYear: "Present" },
  { id: "gurraman_atwal", name: "Gurraman Atwal", birthYear: 1997, deathYear: "Present" },
  { id: "gavin_atwal", name: "Gavin Atwal", birthYear: 2005, deathYear: "Present" },
  { id: "taranvir_mahal", name: "Taranvir Mahal", birthYear: 1999, deathYear: "Present" },
  { id: "jaspreet_mahal", name: "Jaspreet Mahal", birthYear: 2000, deathYear: "Present" },
  { id: "serena_deol", name: "Serena Deol", birthYear: 2003, deathYear: "Present" },
  { id: "shanaya_deol", name: "Shanaya Deol", birthYear: 2014, deathYear: "Present" },
  { id: "gagan_atwal", name: "Gagan Atwal", birthYear: 2007, deathYear: "Present" },
  { id: "aashvir_atwal", name: "Aashvir Atwal", birthYear: 2009, deathYear: "Present" }
];

// Map for quick data lookups
const dataMap = new Map(familyData.map(m => [m.id, m]));

// 2. Tree Hierarchy
const treeStructure = {
  grandparents: ["rachpal_atwal", "nashatar_atwal"],
  branches: [
    {
      parent: "kuldip_rai",
      spouse: "talbinder_rai",
      children: [
        { id: "amandeep_rai" },
        { id: "gurdeep_rai", spouse: "harby_rai", children: ["niam_rai"] },
        { id: "sandeep_rai" },
        { id: "taldeep_rai", spouse: "aneet_rai", children: ["rowan_rai"] }
      ]
    },
    { parent: "jagdish_boparai", spouse: "bhupinder_boparai", children: ["harvey_boparai", "jasjit_boparai"] },
    { parent: "balwinder_atwal", spouse: "parminder_atwal", children: ["simranpreet_atwal", "gurraman_atwal", "gavin_atwal"] },
    { parent: "rajwant_mahal", spouse: "jagtar_mahal", children: ["taranvir_mahal", "jaspreet_mahal"] },
    { parent: "rajinder_deol", spouse: "gurmukh_deol", children: ["serena_deol", "shanaya_deol"] },
    { parent: "gurinder_atwal", spouse: "harjit_atwal", children: ["gagan_atwal", "aashvir_atwal"] }
  ]
};

// 3. Render Code
document.addEventListener("DOMContentLoaded", () => {
  const treeContainer = document.getElementById("tree-container");
  const modal = document.getElementById("details-modal");
  const closeBtn = document.getElementById("close-btn");

  if (!treeContainer) return;

  // --- Step 1: Render Grandparents ---
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

  // Connection line from Grandparents downwards
  treeContainer.appendChild(createVerticalLine('gen1'));

  // --- Step 2: Render Main Branches ---
  const gen2BranchesContainer = createDOMGroup("gen-2-branches");

  treeStructure.branches.forEach(branch => {
    const branchColumn = createDOMGroup("family-branch");
    branchColumn.appendChild(createStubLine());

    // Render Parent + Spouse
    branchColumn.appendChild(createCouplePair(branch.parent, branch.spouse));

    // Render Children
    if (branch.children && branch.children.length > 0) {
      branchColumn.appendChild(createVerticalLine('parent'));
      branchColumn.appendChild(createChildrenRecursive(branch.children));
    }

    gen2BranchesContainer.appendChild(branchColumn);
  });

  treeContainer.appendChild(gen2BranchesContainer);

  // --- Step 3: Modal Event Listener ---
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

// Recursive Helper for Children / Grandchildren
function createChildrenRecursive(childrenList) {
  const container = createDOMGroup("gen-container");

  childrenList.forEach(child => {
    if (typeof child === 'string') {
      const member = dataMap.get(child);
      if (member) container.appendChild(createMemberCard(member));
    } else if (typeof child === 'object' && child.id) {
      const complexBranch = createDOMGroup("family-branch");
      complexBranch.appendChild(createStubLine());
      complexBranch.appendChild(createCouplePair(child.id, child.spouse));

      if (child.children && child.children.length > 0) {
        complexBranch.appendChild(createVerticalLine('parent'));
        complexBranch.appendChild(createChildrenRecursive(child.children));
      }

      container.appendChild(complexBranch);
    }
  });
  return container;
}

// Helper Functions
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

function createCouplePair(parentId, spouseId) {
  const container = createDOMGroup('grandparents-container');
  const parent = dataMap.get(parentId);
  if (parent) container.appendChild(createMemberCard(parent));
  if (spouseId) {
    const spouse = dataMap.get(spouseId);
    if (spouse) container.appendChild(createMemberCard(spouse));
  }
  return container;
}

function createVerticalLine(type) {
  const line = document.createElement("div");
  line.className = "connection-line line-vertical";
  if (type === 'gen1') line.classList.add('line-vertical-gen1');
  return line;
}

function createStubLine() {
  const line = document.createElement('div');
  line.className = 'line-child-stub connection-line';
  return line;
}

function showModal(modal, member) {
  const modalName = document.getElementById("modal-name");
  const modalDates = document.getElementById("modal-dates");
  const modalBio = document.getElementById("modal-bio");

  modalName.textContent = member.name;
  modalDates.textContent = `${member.birthYear} - ${member.deathYear}`;
  modalBio.innerHTML = member.info ? `<p><strong>Details:</strong> ${member.info}</p>` : "<p>Family Member</p>";

  modal.classList.remove("hidden");
}