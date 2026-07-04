import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Callout } from "@/components/Callout";
import { Card } from "@/components/Card";
import { Checkbox, Radio, Switch } from "@/components/controls";
import { Input, Select } from "@/components/Input";
import { Slot } from "@/components/Slot";
import styles from "./styleguide.module.css";

export function ComponentsSection() {
  return (
    <>
      <h2>components</h2>

      <h3>buttons</h3>
      <div className={styles.row}>
        <Button>primary</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="outline">outline</Button>
        <Button variant="ghost">ghost</Button>
      </div>
      <div className={styles.row}>
        <Button size="small">small</Button>
        <Button>medium</Button>
        <Button size="large">large</Button>
        <Button disabled>disabled</Button>
        <Button variant="outline" disabled>
          disabled
        </Button>
      </div>

      <h3>badges</h3>
      <div className={styles.row}>
        <Badge>neutral</Badge>
        <Badge variant="main">main</Badge>
        <Badge variant="secondary">secondary</Badge>
        <Badge variant="outline">outline</Badge>
      </div>

      <h3>form controls</h3>
      <div className={styles.cols}>
        <div className="field">
          <label htmlFor="sg-name">name</label>
          <Input id="sg-name" placeholder="ada lovelace" />
        </div>
        <div className="field">
          <label htmlFor="sg-topic">topic</label>
          <Select id="sg-topic" defaultValue="ai">
            <option value="ai">artificial intelligence</option>
            <option value="web">web engineering</option>
            <option value="stats">statistics</option>
          </Select>
        </div>
      </div>
      <div className={styles.cols}>
        <div className="field">
          <label htmlFor="sg-email">email</label>
          <Input
            id="sg-email"
            type="email"
            defaultValue="not-an-email"
            aria-invalid="true"
            aria-describedby="sg-email-error"
          />
          <span id="sg-email-error" className="field-error">
            enter a valid email address
          </span>
        </div>
        <div className="field">
          <label htmlFor="sg-handle">handle</label>
          <Input id="sg-handle" defaultValue="crokan" disabled />
          <span className="field-hint">handles cannot be changed</span>
        </div>
      </div>

      <h3>checkboxes, radios, switches</h3>
      <div className={styles.stack}>
        <label className="label-inline">
          <Checkbox defaultChecked /> email me about new posts
        </label>
        <label className="label-inline">
          <Checkbox /> email me about talks
        </label>
        <label className="label-inline">
          <Checkbox disabled /> reserved for later (disabled)
        </label>
      </div>
      <div className={styles.stack}>
        <label className="label-inline">
          <Radio name="sg-cadence" defaultChecked /> weekly digest
        </label>
        <label className="label-inline">
          <Radio name="sg-cadence" /> monthly digest
        </label>
      </div>
      <div className={styles.stack}>
        <label className="label-inline">
          <Switch defaultChecked /> public profile
        </label>
        <label className="label-inline">
          <Switch /> show reading activity
        </label>
      </div>

      <h3>callouts</h3>
      <div className={styles.stack}>
        <Callout title="note">
          <p>a neutral aside for context that supports the main text.</p>
        </Callout>
        <Callout variant="main" title="heads up">
          <p>the main color flags things the reader should not miss.</p>
        </Callout>
        <Callout variant="secondary" title="tip">
          <p>the secondary color marks tips and pleasant extras.</p>
        </Callout>
      </div>

      <h3>cards</h3>
      <div className={styles.cols}>
        <Card>
          <h4>static card</h4>
          <p className="card-meta">plain container · no interaction</p>
          <p>groups related content behind one border.</p>
        </Card>
        <Card href="https://github.com/ckproduces">
          <h4>link card</h4>
          <p className="card-meta">whole surface is clickable</p>
          <p>hover strengthens the border instead of underlining.</p>
        </Card>
      </div>

      <h3>slots</h3>
      <p>
        a slot reserves space for content that is not there yet — drafts,
        upcoming embeds, planned sections.
      </p>
      <div className={styles.cols}>
        <Slot />
        <Slot>chart coming soon</Slot>
      </div>

      <h3>keyboard keys</h3>
      <p>
        press <kbd>⌘</kbd> <kbd>K</kbd> to search, or <kbd>Ctrl</kbd> +{" "}
        <kbd>Enter</kbd> to submit a comment.
      </p>
    </>
  );
}
